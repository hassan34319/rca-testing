import { PostSanity } from 'src/types/SanityPost';
import ElearningMentoriasInvestingView from 'src/sections/_elearning/view/elearning-mentorias-investing-view';

import { client } from '../utils/client';


// ----------------------------------------------------------------------

export const metadata = {
  title: 'Mentorias',
};

export const revalidate = 60

export default async function ElearningPostsPage() {
  const getAllPosts = async () => {
    try {
      const posts : PostSanity[] = await client.fetch(`*[_type == "post" && category == "course"]`);
      console.log('fetched Posts from sanity')
      return posts;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const posts = await getAllPosts()
  return <ElearningMentoriasInvestingView />;
}