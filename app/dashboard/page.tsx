import Post from "@/components/Post";
import { postsData } from "@/data";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>My Posts 🚀</h1>
      {postsData && postsData.length > 0 ? (
        postsData.map(
          ({
            id,
            title,
            content,
            author,
            datepublished,
            category,
            links,
            thumbnail,
          }) => (
            <Post
              key={id}
              id={id}
              authorEmail={"test@gmail.com"}
              title={title}
              content={content}
              author={author}
              datepublished={datepublished}
              category={category}
              links={links || []}
              thumbnail={thumbnail}
            />
          )
        )
      ) : (
        <div className="py-6 ">
          No posts created yet. <Link href={"/create-post"} className="underline hover:no-underline hover:text-dark">Create New</Link>
        </div>
      )}
    </div>
  );
}
