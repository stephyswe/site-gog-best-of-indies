import type { Metadata } from "next";

import { GameOverhead, GameSvg } from "@/app/layout-svg";
import { Footer } from "@/ui/footer/Footer";
import { Navbar } from "@/ui/navbar/";

// default css
import "../../../assets/css";
// route specific css
import "../../../assets/css/game/game-prince-of-persia.css";
import "../../../assets/css/game/game-product.css";



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
      <div className="layout ng-scope" card-product="1207658747">
        <GameSvg />
        <Navbar />
        <GameOverhead />
        {children}
        <Footer />
      </div>
    </>
  );
}
