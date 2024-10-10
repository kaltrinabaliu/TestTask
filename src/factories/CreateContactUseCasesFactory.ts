import { CreateContactsUseCase } from "../use-cases/CreateContactsUseCase";
import { DeleteContactsUseCase } from "../use-cases/DeleteContactUseCase";
import { FetchAllContactsUseCase } from "../use-cases/FetchAllContactsUseCase";
import { UpdateContactsUseCase } from "../use-cases/UpdateContactUseCase";
import { createContactService } from "./Factory";

export const createFetchAllContactsUseCase = (): FetchAllContactsUseCase => {
  const contactService = createContactService();
  return new FetchAllContactsUseCase(contactService);
};
export const createCreateContactsUseCase = (): CreateContactsUseCase => {
  const contactService = createContactService();
  return new CreateContactsUseCase(contactService);
};
export const createUpdateContactsUseCase = (): UpdateContactsUseCase => {
  const contactService = createContactService();
  return new UpdateContactsUseCase(contactService);
};
export const createDeleteContactsUseCase = (): DeleteContactsUseCase => {
  const contactService = createContactService();
  return new DeleteContactsUseCase(contactService);
};
