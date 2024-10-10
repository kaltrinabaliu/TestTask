import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ContactsDto } from "../../entities/ContactsDto";
import {
  createFetchAllContactsUseCase,
  createCreateContactsUseCase,
  createUpdateContactsUseCase,
  createDeleteContactsUseCase,
} from "../../factories/CreateContactUseCasesFactory";
import { ContactDto } from "../../entities/ContactDto";

export interface ContactsState {
  contacts: ContactDto[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null,
};

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
    const fetchAllUseCase = createFetchAllContactsUseCase();
    return await fetchAllUseCase.execute();
  }
);

export const createContact = createAsyncThunk(
  "contacts/create",
  async (contact: ContactDto, {}) => {
    try {
      const createUseCase = createCreateContactsUseCase();
      return await createUseCase.execute(contact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async (
    {
      contactId,
      updatedContact,
    }: { contactId: number; updatedContact: ContactDto },
    {}
  ) => {
    try {
      const updateUseCase = createUpdateContactsUseCase();
      return await updateUseCase.execute(contactId, updatedContact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId: string, {}) => {
    try {
      const deleteUseCase = createDeleteContactsUseCase();
      await deleteUseCase.execute(contactId);
      return contactId; // Returning contactId for the reducer to remove it from state
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder: {
    addCase: (
      arg0: any,
      arg1: (state: any) => void
    ) => {
      (): any;
      new (): any;
      addCase: {
        (
          arg0: any,
          arg1: (
            state: { loading: boolean; contacts: any },
            action: { payload: any }
          ) => void
        ): {
          (): any;
          new (): any;
          addCase: {
            (
              arg0: any,
              arg1: (
                state: { loading: boolean; error: any },
                action: { error: { message: string } }
              ) => void
            ): {
              (): any;
              new (): any;
              addCase: {
                (arg0: any, arg1: (state: any, action: any) => void): {
                  (): any;
                  new (): any;
                  addCase: {
                    (arg0: any, arg1: (state: any, action: any) => void): {
                      (): any;
                      new (): any;
                      addCase: {
                        (
                          arg0: any,
                          arg1: (state: any, action: any) => void
                        ): void;
                        new (): any;
                      };
                    };
                    new (): any;
                  };
                };
                new (): any;
              };
            };
            new (): any;
          };
        };
        new (): any;
      };
    };
  }) => {
    builder
      .addCase(
        fetchAllContacts.pending,
        (state: { loading: boolean; error: null }) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addCase(
        fetchAllContacts.fulfilled,
        (
          state: { loading: boolean; contacts: any },
          action: { payload: any }
        ) => {
          state.loading = false;
          state.contacts = action.payload; // Update the contacts array
        }
      )
      .addCase(
        fetchAllContacts.rejected,
        (
          state: { loading: boolean; error: any },
          action: { error: { message: string } }
        ) => {
          state.loading = false;
          state.error = action.error.message || "Failed to fetch contacts.";
        }
      )
      .addCase(
        createContact.fulfilled,
        (state: { contacts: any[] }, action: { payload: any }) => {
          state.contacts.push(action.payload); // Add new contact to the array
        }
      )
      .addCase(
        updateContact.fulfilled,
        (state: { contacts: any[] }, action: { payload: { id: any } }) => {
          const index = state.contacts.findIndex(
            (contact: { id: any }) => contact.id === action.payload.id
          );
          if (index !== -1) {
            state.contacts[index] = action.payload; // Update the contact
          }
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (state: { contacts: any[] }, action: { payload: any }) => {
          state.contacts = state.contacts.filter(
            (contact: { id: any }) => contact.id !== action.payload
          ); // Remove deleted contact
        }
      );
  },
});

export default contactSlice.reducer;
function rejectWithValue(error: unknown) {
  throw new Error("Function not implemented.");
}
