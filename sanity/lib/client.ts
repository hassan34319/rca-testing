import { createClient } from 'next-sanity'

import { useCdn,dataset, projectId, apiVersion, } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
