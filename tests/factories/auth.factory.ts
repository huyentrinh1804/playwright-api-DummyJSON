export interface AuthData{
  username: string;                 // required
  password: string;                // required, unique
};
export function buildAuthData (
overrides: Partial<AuthData>={}):AuthData{
  return {
    username: 'emilys',
    password: 'emilyspass',
    ...overrides
  }
};

 

