/* eslint-disable import/no-extraneous-dependencies */
import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';

import { client } from './client';

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
      }),
    FacebookProvider({
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string
      }),
    SanityCredentials(client), // only if you use sign in with credentials
  ],
  session: {
    strategy: 'jwt',
  },
  secret: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
  adapter: SanityAdapter(client),
};

export default NextAuth(authOptions);
