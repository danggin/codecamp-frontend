"use client";

import { usePathname } from "next/navigation";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import Sidebar from "./sidebar";

interface ILayout {
  children: React.ReactNode;
}

const HIDDEN_HEADERS = [
  "/section12/12-01-library-icon",
  "/section12/12-03-library-star",
];

export default function Layout({ children }: ILayout) {
  const pathname = usePathname();

  const isHiddenHeader = HIDDEN_HEADERS.includes(pathname);

  return (
    <>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "80%" }}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
