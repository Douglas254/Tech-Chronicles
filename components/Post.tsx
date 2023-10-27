import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

interface PostProps {
  id: string;
  title: string;
  content: string;
  author: string;
  datepublished: string;
  category?: string;
  links?: string[];
  thumbnail?: string;
  authorEmail?: string;
}

export default function Post({
  id,
  title,
  content,
  author,
  datepublished,
  category,
  links,
  thumbnail,
  authorEmail,
}: PostProps) {
  const isEditable = true;

  return (
    <div className="my-4 py-5 border-b border-b-300 shadow-sm rounded-lg bg-white">
      <div className="mb-2 pl-4">
        Posted by: <span className="font-bold">{author}</span> on &nbsp;
        <span className="text-sm font-tajawal font-[500] text-[#6b6b6b]">
          {datepublished}
        </span>
      </div>

      <div className="w-full h-72 relative">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover object-center rounded-t-md"
          />
        ) : (
          <div>
            <Image
              src={"/thumbnail-placeholder.png"}
              alt={title}
              fill
              className="object-cover object-center rounded-md border-t"
            />
          </div>
        )}
      </div>

      <div className="pl-4">
        {category && (
          <Link
            className="bg-slate-800 py-0.5 px-4 text-white rounded-md w-fit mt-4 block text-sm hover:font-semibold font-[500]"
            href={`categories/${category}`}
          >
            {category}
          </Link>
        )}

        <h2>{title}</h2>
        <p className="content">{content}</p>

        {links && (
          <div className="flex flex-col gap-1 mt-3 pb-2">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <Link className="link" href={`${link}`}>
                  {link}
                </Link>
              </div>
            ))}
          </div>
        )}

        {isEditable && (
          <div className="flex gap-2 px-4 py-2 my-2 bg-slate-200 w-fit rounded-md font-bold hover:text-[#000000e5] text-xs">
            <Link href={`/edit-post/${id}`}>Edit</Link> |
            <DeleteButton />
          </div>
        )}
      </div>
    </div>
  );
}
