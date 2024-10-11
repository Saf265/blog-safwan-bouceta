import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="navbar my-4 flex items-center justify-between rounded-3xl border px-3 shadow-xl">
      <div className="flex-1">
        <p className="text-xl">© 2023 Safwan Bouceta</p>
      </div>
      <div className="mr-2 flex-none">
        <Link href="/about" className="link link-primary font-semibold">
          À propos
        </Link>
      </div>
    </footer>
  );
};
