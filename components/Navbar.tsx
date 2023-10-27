import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between pb-4 border-b mb-4">
      <div>
        <Link href={"/"}>
          <h1 className="tracking-tighter text-4xl font-bold text-dark font-vibes">
            TC
          </h1>
        </Link>
        <p className="text-xs">Tech & News Insights</p>
      </div>

      <div className="flex items-center">
        <Link className="btn" href={"/sign-in"}>
          Sign In
        </Link>
      </div>
    </div>
  );
}