import type { Metadata } from "next";
import { Cormorant_Infant } from "next/font/google";
import "./globals.css";
import { DrawerMobileMenu } from "./ui/organisms/DrawerMobileMenu";
import { Navigation } from "./ui/organisms/Navigation";

const cormorant = Cormorant_Infant({
  weight: ["700", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cudny Kwiat",
  description: "Studio florystyczne - dekoracje ślubne, balonowe i świąteczne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={cormorant.className}>
        <Navigation />
        {children}
        <DrawerMobileMenu />
      </body>
    </html>
  );
}
