import Link from "next/link";

export const Header = () => {
  return (
    <header className="navbar my-4 flex items-center justify-between rounded-3xl border px-3 shadow-xl">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Safwan Bouceta
        </a>
      </div>
      <div className="mr-1 flex-none">
        <Link href="/" className="link link-primary font-semibold">
          Posts
        </Link>
      </div>
    </header>
  );
};
