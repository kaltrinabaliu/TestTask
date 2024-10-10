import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactsDto } from "../../entities/ContactsDto";
import { CreateContactsUseCase } from "../../use-cases/CreateContactsUseCase";
import { FetchAllContactsUseCase } from "../../use-cases/FetchAllContactsUseCase";
import { createFetchAllContactsUseCase } from "../../factories.ts/CreateContactUseCasesFactory";

const initialState: ContactsDto = {
  contacts: [],
};

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
    const fetchAllUseCase = await createFetchAllContactsUseCase().execute();
  }
);
