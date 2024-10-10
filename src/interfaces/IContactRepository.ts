import type { ContactDto } from "../entities/ContactDto";

export interface IContactRepository {
  fetchAllContact(): Promise<ContactDto[]>;
  createContact(contact: ContactDto): Promise<void>;
  delete(id: number): Promise<void>;
  update(id: number): Promise<void>;
}
