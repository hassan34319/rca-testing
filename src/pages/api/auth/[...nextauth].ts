/* eslint-disable import/no-extraneous-dependencies */
import NextAuth, { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';

import { client } from 'src/app/utils/client';


const options: NextAuthOptions = {
  providers: [
    // GitHub({
    //   clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    // }),
    // Google({
    //     clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    //     clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
    //   }),
    // Facebook({
    //     clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
    //     clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string
    //   }),
    SanityCredentials(client) // only if you use sign in with credentials
  ],
  session: {
    strategy: 'jwt'
  },
  secret: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
  adapter: SanityAdapter(client),
};

export default NextAuth(options);

