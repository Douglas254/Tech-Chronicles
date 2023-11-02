"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const { status, data: session } = useSession();
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <div className="flex justify-between pb-4 border-b mb-4 relative">
      <div>
        <Link href={"/"}>
          <h1 className="tracking-tighter text-4xl font-bold text-dark font-vibes">
            TC
          </h1>
        </Link>
        <p className="text-xs">Tech & News Insights</p>
      </div>

      {status === "authenticated" ? (
        <>
          <div
            ref={popupRef}
            className={`absolute z-30 right-0 top-14 font-mandali bg-white p-4 shadow-lg rounded-md flex-col gap-2 text-right min-w-[130px] ${
              isPopupVisible ? "flex" : "hidden"
            }`}
          >
            <div className="font-bold font-mandali">{session?.user?.name}</div>
            <div className="text-sm flex items-center gap-1 text-dark">
              {session?.user?.email}{" "}
            </div>
            <Link
              onClick={() => setIsPopupVisible(false)}
              className="hover:underline font-mandali"
              href={"/dashboard"}
            >
              Dashboard
            </Link>
            <Link
              onClick={() => setIsPopupVisible(false)}
              className="hover:underline"
              href={"/create-post"}
            >
              Create Post
            </Link>
            <button onClick={() => signOut()} className="btn">
              Sign Out
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              className="hidden md:flex gap-2 items-center mr-6"
              href={"/create-post"}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span> Create new</span>
            </Link>
            <Image
              src={session?.user?.image || ""}
              width={38}
              height={38}
              alt="Profile Image"
              className="rounded-full cursor-pointer shadow-md shadow-dark "
              onClick={() => setIsPopupVisible((prev) => !prev)}
            />
          </div>
        </>
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
