import type { ContactDto } from "../entities/ContactDto";
import type { IContactService } from "../interfaces/IContactService";

export class UpdateContactsUseCase {
  constructor(private contactService: IContactService) {}

  async execute(contactId: number, contact: ContactDto): Promise<void> {
    return await this.contactService.update(contactId, contact);
  }
}
