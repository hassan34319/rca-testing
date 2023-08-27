
import { createClient } from 'next-sanity'

console.log(process.env.NEXT_PUBLIC_SANITY_API_TOKEN)
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, 
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2023-05-30", // Learn more: https://www.sanity.io/docs/api-versioning
    useCdn: false,
  };

  export const client = createClient(config);