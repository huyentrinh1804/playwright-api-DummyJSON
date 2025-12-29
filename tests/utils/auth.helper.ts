import { request } from '@playwright/test';
import { env } from '../config/env';

let cachedToken: string | null = null;

export async function getAuthToken(): Promise<string> {
  if (cachedToken) return cachedToken;

  const context = await request.newContext();
  const res = await context.post(`${env.baseUrl}/auth/login`, {
    data: {
      username: env.username,
      password: env.password,
    },
  });

  const body = await res.json();
  cachedToken = body.token;
  return cachedToken!;
}
