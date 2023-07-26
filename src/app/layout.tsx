import type { Metadata } from "next";
import { headers } from "next/headers";

import { GameOverhead, GameSvg, RootSvg, StoreSvg } from "@/app/layout-svg";
import { Footer } from "@/ui/footer/Footer";
import { Navbar } from "@/ui/navbar/Navbar";

import "./custom-section-flashdeal.css";
import "./custom-section.css";
import "./footer.css";
import "./globals.css";
import "./gog-statics.css";
import "./menu.css";
import "./morecss.css";
import "./now-on-sale.css";
import "./slider.css";

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
  // handle body class based on route
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  function getHtmlProps(pathname: any) {
    switch (pathname) {
      case "/":
        return {
          className: "",
          "ng-app": "gogFrontpage",
          lang: "en-US",
          "data-theme": "light",
        };
      case "/game":
        return {
          lang: "en",
          "ng-app": "productcard",
          id: "pageTop",
          className: "ng-scope",
        };

      case "/store":
        return {
          lang: "en",
          dir: "ltr",
        };
      default:
        return {};
    }
  }

  function getBodyProps(pathname: any) {
    switch (pathname) {
      case "/":
        return {
          "ng-init":
            "userModel = {isUser: false, isAnonymous: false, bodyClass:false}; bodyModel = {bodyClass: ''}",
          "ng-class":
            "{'is-user':userModel.isUser, 'is-anonymous':userModel.isAnonymous}",
          className: "productcard _prices-in-sek _price-currency-symbol-before",
          "gog-string-format": "",
        };
      case "/game":
        return {
          className: "productcard _prices-in-sek _price-currency-symbol-before",
        };

      case "/store":
        return {
          className: "light-theme",
        };

      default:
        return {};
    }
  }

  function innerBodyRender(children: any) {
    switch (activePath) {
      case "/":
        return (
          <>
            <RootSvg />
            <Navbar />
            {/* <!--menugogcomisupandrunningwithoutaproblem--> */}
            <div className="wrapper cf _prices-in-sek _price-currency-symbol-before">
              <div className="content cf">{children}</div>
            </div>
            <Footer />
          </>
        );
      case "/game":
        return (
          <div className="layout ng-scope" card-product="1207658747">
            <GameSvg />
            <Navbar />
            <GameOverhead />
            {children}
            <Footer />
          </div>
        );

      default:
        return (
          <div ng-app="menuCompanion" className="ng-scope">
            <StoreSvg />
            <Navbar />
            {children}
            <Footer />
          </div>
        );
    }
  }

  return (
    <html {...getHtmlProps(activePath)}>
      <body {...getBodyProps(activePath)}>
        {/* <!-- force end any comment tags before the partial --> */}
        {innerBodyRender(children)}
      </body>
    </html>
  );
}
