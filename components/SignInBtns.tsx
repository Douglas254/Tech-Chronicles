import Image from "next/image";

export default function SignInBtns() {
  return (
    <>
      <h1 className="text-center mt-8 font-nosifer">Sign In 🗝️</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button className="flex items-center px-4 py-[7px] gap-4 border rounded-full hover:bg-slate-100/60 hover:shadow-md transition">
          <span>
            <Image
              src={"/github-logo.svg"}
              alt="GitHub Logo"
              width={27}
              height={27}
            />
          </span>
          Sign In With GitHub
        </button>
        <button className="flex items-center px-4 py-[7px] gap-4 border rounded-full hover:bg-slate-100/60 hover:shadow-md transition">
          <span>
            <Image
              src={"/google-logo.svg"}
              alt="Google Logo"
              width={27}
              height={27}
            />
          </span>
          Sign In With Google
        </button>
      </div>
    </>
  );
}
