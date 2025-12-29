import { APIRequestContext } from '@playwright/test';
import { AuthData } from '../factories/auth.factory';

export class AuthService {
  constructor(private request: APIRequestContext) {}

  login(payload: AuthData) {
    return this.request.post('/auth/login', {
      data: payload,
    });
  }
}
