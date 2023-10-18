import { getBookPosts } from "@/lib/helpers/api-util";
import React from "react";

export default function PostView({ bookPosts }) {
  console.log(bookPosts);
  return (
    <div>
      {/* {bookPosts.map((post) => (
        <div key={post._id}>{post.title}</div>
      ))} */}
    </div>
  );
}

export async function getStaticProps() {
  const bookPosts = await getBookPosts();

  return {
    props: { bookPosts },
  };
}
