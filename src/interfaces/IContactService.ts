import type { ContactDto } from "../entities/ContactDto";

export interface IContactService {
  fetchAllContact(): Promise<ContactDto[]>;
  createContact(contact: ContactDto): Promise<void>;
  delete(id: number): Promise<void>;
  update(id: number, contact: ContactDto): Promise<void>;
}
