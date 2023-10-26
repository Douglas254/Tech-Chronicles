import { categoriesData } from "@/data";
import Link from "next/link";

export default function CategoriesList() {
  return (
    <div className="flex gap-2 lex-wrap">
      {categoriesData &&
        categoriesData.map(({ name, id }) => (
          <Link
            key={id}
            className="bg-slate-800 text-white px-4 py-1 rounded-md text-xs"
            href={`/categories/${name}`}
          >
            {name}
          </Link>
        ))}
    </div>
  );
}
