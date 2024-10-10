import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ContactDto } from "../entities/ContactDto";
import {
  createFetchAllContactsUseCase,
  createCreateContactsUseCase,
  createUpdateContactsUseCase,
  createDeleteContactsUseCase,
} from "../factories/Factory.ts";

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

// Async actions using `createAsyncThunk`
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const fetchAllContactsUseCase = createFetchAllContactsUseCase();
    return await fetchAllContactsUseCase.execute();
  }
);

export const createContact = createAsyncThunk(
  "contacts/createContact",
  async (contact: ContactDto, { dispatch }) => {
    const createContactsUseCase = createCreateContactsUseCase();
    await createContactsUseCase.execute(contact);
    dispatch(fetchContacts()); // Refresh contacts after creation
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact: ContactDto, { dispatch }) => {
    const updateContactsUseCase = createUpdateContactsUseCase();
    await updateContactsUseCase.execute(contact);
    dispatch(fetchContacts()); // Refresh contacts after updating
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: string, { dispatch }) => {
    const deleteContactsUseCase = createDeleteContactsUseCase();
    await deleteContactsUseCase.execute(contactId);
    dispatch(fetchContacts()); // Refresh contacts after deletion
  }
);

// Contacts slice
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {}, // Add sync reducers here if needed
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
            (arg0: any, arg1: (state: any) => void): {
              (): any;
              new (): any;
              addCase: {
                (arg0: any, arg1: (state: any) => void): {
                  (): any;
                  new (): any;
                  addCase: {
                    (arg0: any, arg1: (state: any) => void): {
                      (): any;
                      new (): any;
                      addCase: {
                        (arg0: any, arg1: (state: any) => void): {
                          (): any;
                          new (): any;
                          addCase: {
                            (arg0: any, arg1: (state: any) => void): {
                              (): any;
                              new (): any;
                              addCase: {
                                (arg0: any, arg1: (state: any) => void): {
                                  (): any;
                                  new (): any;
                                  addCase: {
                                    (
                                      arg0: any,
                                      arg1: (state: any) => void
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
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch contacts.";
      })

      .addCase(createContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(createContact.rejected, (state) => {
        state.error = "Failed to create contact.";
        state.loading = false;
      })

      .addCase(updateContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateContact.rejected, (state) => {
        state.error = "Failed to update contact.";
        state.loading = false;
      })

      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.error = "Failed to delete contact.";
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer;
