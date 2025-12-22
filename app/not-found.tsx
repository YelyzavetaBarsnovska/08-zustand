import { Metadata } from "next";
import Link from "next/link";
import css from "./page.module.css";

export const metadata: Metadata = {
  title: "Page not found — 404 | NoteHub",
  description: "This page does not exist or has been deleted.",
  openGraph: {
    title: "Page not found — 404",
    description: "This page does not exist or has been deleted.",
    url: "https://08-zustand-kohl-rho.vercel.app/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Page not found — 404",
      },
    ],
  },
};

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">Go home!</Link>
    </div>
  );
}

export default NotFound;
