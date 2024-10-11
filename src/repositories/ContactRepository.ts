import type { IContactRepository } from "../interfaces/IContactRepository";
import type { IApiClient } from "../interfaces/IApiClient";
import { ContactDto } from "../entities/ContactDto";

export class ContactRepository implements IContactRepository {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async fetchAllContact(): Promise<ContactDto[]> {
    return await this.apiClient.get<ContactDto[]>("/contacts");
  }

  async createContact(contact: ContactDto): Promise<void> {
    try {
      await this.apiClient.post("/contacts", contact);
    } catch (error) {
      console.error("Error saving contacts:", error);
    }
  }

  async update(id: number, contact: ContactDto): Promise<void> {
    try {
      await this.apiClient.put(`/contacts/${id}`, contact);
    } catch (error) {
      console.error("Error updating contacts:", error);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.apiClient.delete(`/contacts/${id}`);
    } catch (error) {
      console.error("Error deleting contacts:", error);
    }
  }
}
