import { useEffect, useState } from 'react';
import { FC } from "react";

interface Props {
  postId: string,
}

interface PostData {
  title: string;
  body: string;
}

const Post: FC<Props> = ({ postId }) => {
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Post</h2>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Body:</b> {post.body}</p>
      <p>{postId}</p>
    </div>
  );
};

export default Post;