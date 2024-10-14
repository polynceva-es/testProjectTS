import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App with NextJS + React + TS",
  description: "Test migration from Vite to NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
