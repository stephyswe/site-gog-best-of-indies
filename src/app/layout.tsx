import type { Metadata } from "next";

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
    <html>
      <body>
        {/* <!-- force end any comment tags before the partial --> */}
        {children}
      </body>
    </html>
  );
}
