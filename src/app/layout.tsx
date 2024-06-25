import "~/styles/globals.css";
import { fontMain } from "~/app/fonts";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Edversa",
  description: "Nossa missão é transformar a educação através da inclusão.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontMain.className}>
      <body className="bg-brandColor-bg">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
