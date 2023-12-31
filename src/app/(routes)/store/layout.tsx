import type { Metadata } from "next";

import { StoreSvg } from "@/app/layout-svg";
import { Footer } from "@/ui/footer/Footer";
import { Navbar } from "@/ui/navbar";

// default css
import "../../../assets/css/not-gog";
// route specific css
import "./catalog.css";
import "./css/icon.css";
import "./store.css";
// 30 styles css
import "./styles";

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
      <div ng-app="menuCompanion" className="ng-scope">
        <StoreSvg />
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
