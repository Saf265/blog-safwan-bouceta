import { Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="navbar my-4 flex items-center justify-between rounded-3xl border px-3 shadow-xl">
      <div className="flex-1">
        <p className="text-xl">© 2024 Safwan Bouceta</p>
      </div>
      <div className="mr-2 flex-none">
        <Link
          href="https://x.com/Safwan1978774"
          target="_blank"
          className="btn btn-circle btn-ghost"
        >
          <Twitter />
        </Link>
      </div>
    </footer>
  );
};
