import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            Nextjs App
          </Link>
          <ul className="flex text-2xl">
            <li>
              <Link className="btn btn-ghost roudend-btn" href="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost roudend-btn" href="/signin">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
