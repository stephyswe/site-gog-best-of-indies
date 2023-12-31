import type { Metadata } from "next";

import { RootSvg } from "@/app/layout-svg";
import { Footer } from "@/ui/footer/Footer";
import { Navbar } from "@/ui/navbar";

import "../../assets/css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <!-- force end any comment tags before the partial --> */}
      <RootSvg />
      <Navbar />
      {/* <!--menugogcomisupandrunningwithoutaproblem--> */}
      <div className="wrapper cf _prices-in-sek _price-currency-symbol-before">
        <div className="content cf">{children}</div>
      </div>
      <Footer />
    </>
  );
}
