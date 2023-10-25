import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-3 text-center text-sm">
      This website is designed with ❤️ by &nbsp;
      <Link className="underline hover:no-underline" href={"https://github.com/douglas254"}>
        Douglas Obara
      </Link> &copy;{new Date().getFullYear()}
    </footer>
  );
}
