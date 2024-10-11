import type { IContactRepository } from "../interfaces/IContactRepository";
import type { IContactService } from "../interfaces/IContactService";
import { ContactDto } from "../entities/ContactDto";

export class ContactService implements IContactService {
  constructor(private contactRepository: IContactRepository) {}

  async fetchAllContact(): Promise<ContactDto[]> {
    try {
      return await this.contactRepository.fetchAllContact();
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      throw new Error("Could not fetch contacts.");
    }
  }

  async createContact(contact: ContactDto): Promise<void> {
    try {
      await this.contactRepository.createContact(contact);
    } catch (error) {
      console.error("Failed to create contact:", error);
      throw new Error("Could not create contact.");
    }
  }

  async update(contactId: number, contact: ContactDto): Promise<void> {
    try {
      await this.contactRepository.update(contactId, contact);
    } catch (error) {
      console.error("Failed to update contact:", error);
      throw new Error("Could not update contact.");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.contactRepository.delete(id);
    } catch (error) {
      console.error("Failed to delete contact:", error);
      throw new Error("Could not delete contact.");
    }
  }
}
