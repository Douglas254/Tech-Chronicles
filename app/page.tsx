import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postsData } from "@/data";

export default function Home() {
  return (
    <>
      <CategoriesList />

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
        <div className="py-6 ">No posts to display</div>
      )}
    </>
  );
}
