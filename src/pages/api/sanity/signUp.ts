import { signUpHandler } from 'next-auth-sanity';

import { client } from 'src/app/utils/client';

export default signUpHandler(client);