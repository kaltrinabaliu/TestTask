import type { ContactDto } from "../entities/ContactDto";
import type { IContactService } from "../interfaces/IContactService";

export class FetchAllContactsUseCase {
  constructor(private contactService: IContactService) {}

  async execute(): Promise<ContactDto[]> {
    return await this.contactService.fetchAllContact();
  }
}
