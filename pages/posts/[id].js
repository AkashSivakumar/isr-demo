import React from 'react';

// This function fetches post data based on the post ID
export async function getStaticProps({ params }) {
    const res = await fetch(`https://662e3949a7dda1fa378c66fc.mockapi.io/api/v1/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
        // revalidate: 10 // Optional: revalidate at most once every 10 seconds
    };
}

// This function provides paths to pre-render based on post IDs
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking' // Use 'blocking' to generate pages on-demand
    };
}

function Post({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
