import { AuthData } from '../../factories/auth.factory';

export interface AuthRequiredCase {
  title: string;
  payload: Partial<AuthData>;
  expectedStatus: number;
  expectedMSG: string;
}

export const requiredCases: AuthRequiredCase[] = [
  {
    title: 'missing username',
    payload: { username: undefined },
    expectedStatus: 400,
    expectedMSG: 'Username and password required',
  },
  {
    title: 'missing password',
    payload: { password: undefined },
    expectedStatus: 400,
    expectedMSG: 'Username and password required',
  },
  {
    title: 'empty username',
    payload: { username: '' },
    expectedStatus: 400,
    expectedMSG: 'Username and password required',
  },
  {
    title: 'empty password',
    payload: { password: '' },
    expectedStatus: 400,
    expectedMSG: 'Username and password required',
  },
  {
    title: 'wrong username',
    payload: { username: 'WrongUserName' },
    expectedStatus: 400,
    expectedMSG: 'Invalid credentials',
  },
  {
    title: 'wrong password',
    payload: { password: 'WrongPassword' },
    expectedStatus: 400,
    expectedMSG: 'Invalid credentials',
  },
  {
    title: 'wrong username & wrong password',
    payload: { username: 'emily', password: 'emily' },
    expectedStatus: 400,
    expectedMSG: 'Invalid credentials',
  },
];
