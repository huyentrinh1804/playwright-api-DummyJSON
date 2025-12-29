import { getEnv } from '../utils/env.helper';

export const env = {
  baseUrl: getEnv('BASE_URL'),
  username: getEnv('USERNAME'),
  password: getEnv('PASSWORD'),
};
