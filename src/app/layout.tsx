import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Todo App",
  description: "ToDo app next js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
