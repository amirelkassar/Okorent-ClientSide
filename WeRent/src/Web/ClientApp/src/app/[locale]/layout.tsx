import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination'
import "@mantine/core/styles.css";
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import "./globals.css";
import { MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="font-Medium text-black max-w-[2000px]  mx-auto bg-white">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
