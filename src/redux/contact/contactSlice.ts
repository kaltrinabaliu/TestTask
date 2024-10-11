import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  async (contact: ContactDto, { rejectWithValue }: any) => {
    try {
      const createUseCase = createCreateContactsUseCase();
      return await createUseCase.execute(contact);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create contact.");
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
    { rejectWithValue }: any
  ) => {
    try {
      const updateUseCase = createUpdateContactsUseCase();
      const updatedContactResponse = await updateUseCase.execute(
        contactId,
        updatedContact
      );

      return updatedContactResponse;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to update contact.");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId: number, { rejectWithValue }: any) => {
    try {
      const deleteUseCase = createDeleteContactsUseCase();
      await deleteUseCase.execute(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to delete contact.");
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
        (arg0: any, arg1: (state: any, action: any) => void): {
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
          state.contacts = action.payload;
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
          state.contacts.push(action.payload);
        }
      )

      .addCase(
        updateContact.fulfilled,
        (state: { contacts: any[] }, action: { payload: { id: any } }) => {
          if (action.payload && action.payload.id) {
            const index = state.contacts.findIndex(
              (contact: { id: any }) => contact.id === action.payload.id
            );
            if (index !== -1) {
              state.contacts[index] = action.payload;
            }
          } else {
          }
        }
      )

      .addCase(
        deleteContact.fulfilled,
        (state: { contacts: any[] }, action: { payload: any }) => {
          state.contacts = state.contacts.filter(
            (contact: { id: any }) => contact.id !== action.payload
          );
        }
      );
  },
});

export default contactSlice.reducer;
