import { ApiClient } from "../api/ApiClient";
import { ContactRepository } from "../repositories/ContactRepository";
import { ContactService } from "../services/ContactService";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export const createApiClient = (): ApiClient => {
  return new ApiClient(baseURL);
};

export const createContactRepository = (): ContactRepository => {
  const apiClient = createApiClient();
  return new ContactRepository(apiClient);
};

export const createContactService = (): ContactService => {
  const contactRepository = createContactRepository();
  return new ContactService(contactRepository);
};
