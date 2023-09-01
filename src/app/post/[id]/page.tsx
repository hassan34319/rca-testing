import { client } from 'src/app/utils/client';
import { PostSanity } from 'src/types/SanityPost';
import ElearningPostView from 'src/sections/_elearning/view/elearning-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'The A-Z Of Event Post',
};

export default async function ElearningPostIndividualPage({ params }: { params: { id: string } }) {
  const getAllPosts = async () => {
    try {
      const posts: PostSanity[] = await client.fetch(`*[_type == "post" && category == "course"]`);
      return posts;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const posts = await getAllPosts();

  const postId = params.id;

  const post: PostSanity = await client.fetch(
    `*[_type == "post" && id == $postId && category == "course"][0]`,
    {
      postId, // Pass the courseId as a parameter in the options object
    }
  );


  console.log(post)


  return <ElearningPostView post={post} posts={posts} />;
}
