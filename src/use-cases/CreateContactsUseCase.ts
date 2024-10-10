import type { ContactDto } from "../entities/ContactDto";
import type { IContactService } from "../interfaces/IContactService";

export class CreateContactsUseCase {
  constructor(private contactService: IContactService) {}

  async execute(contact: ContactDto): Promise<void> {
    return await this.contactService.createContact(contact);
  }
}
