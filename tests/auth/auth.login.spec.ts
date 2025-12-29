import { test, expect, request as playwrightRequest } from '@playwright/test';
import { AuthService } from '../services/auth.service';
import { buildAuthData } from '../factories/auth.factory';
import { requiredCases} from '../data/auth/auth.validation.data';
import { env } from '../config/env';

for (const tc of requiredCases) {
  test(`auth login - ${tc.title}`, async () => {
    const apiContext = await playwrightRequest.newContext({
      baseURL: env.baseUrl,
    });

    const authService = new AuthService(apiContext);

    const payload = buildAuthData(tc.payload);

    const res = await authService.login(payload);

    expect(res.status()).toBe(tc.expectedStatus);

    if (tc.expectedStatus === 200) {
      const body = await res.json();
      expect(body.token).toBeTruthy();
    }
  });
}

