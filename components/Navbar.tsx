"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();

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

      {status === "authenticated" ? (
        <div className="flex items-center">
          <button onClick={() => signOut()} className="btn">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <Link className="btn" href={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
