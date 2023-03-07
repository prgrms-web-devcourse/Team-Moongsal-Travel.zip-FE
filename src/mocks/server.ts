import { SetupServer, setupServer } from 'msw/node';

import { handlers } from '@/mocks/handlers';

export const server: SetupServer = setupServer(...handlers);
