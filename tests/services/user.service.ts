import { APIRequestContext } from '@playwright/test';

export class UserService {
  constructor(private request: APIRequestContext) {}

  getUser(id: number) {
    return this.request.get(`/users/${id}`);
  }

  createUser(payload: any) {
    return this.request.post('/users/add', { data: payload });
  }

  updateUser(id: number, payload: any) {
    return this.request.put(`/users/${id}`, { data: payload });
  }
}
