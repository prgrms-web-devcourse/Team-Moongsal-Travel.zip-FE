import { SetupWorker, setupWorker } from 'msw';

import { handlers } from '@/mocks/handlers';

export const worker: SetupWorker = setupWorker(...handlers);
