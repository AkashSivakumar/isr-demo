import React from 'react';
import Link from 'next/link';
export async function getStaticProps() {
    // Replace 'your-api-url' with your actual Mock API URL
    const res = await fetch('https://662e3949a7dda1fa378c66fc.mockapi.io/api/v1/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
        // Next.js will attempt to re-generate the page:
        // - At most once every 10 seconds
        // revalidate: 30, // In seconds
    };
}

function Posts({ posts }) {
  return (
      <div>
          <h1>Posts</h1>
          <ul>
              {posts.map(post => (
                  <li key={post.id}>
                      <h2>
                          <Link href={`/posts/${post.id}`} passHref>
                              <a target="_blank" rel="noopener noreferrer">{post.title}</a>
                          </Link>
                      </h2>
                      <p>{post.content}</p>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default Posts;
