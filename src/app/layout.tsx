import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "./(Components)/dashboardWrapper";



export const metadata: Metadata = {
  title: "MyHub Next",
  description: "MyHub Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
        </body>
    </html>
  );
}
