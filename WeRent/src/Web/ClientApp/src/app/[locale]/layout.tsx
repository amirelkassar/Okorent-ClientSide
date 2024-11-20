import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "react-phone-input-2/lib/style.css";
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
      <body className=" overflow-x-hidden relative">
        <div
          className="w-screen max-h-[150vh] h-full absolute top-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, #F0F6FB 0%, #F0F6FB 35%,#EBF6EDBD 70%, #DFF5C608 88%, #DFF5C608 100%)"
          }}
        ></div>
        <div className=" relative">
          <MantineProvider>{children}</MantineProvider>
        </div>
      </body>
    </html>
  );
}
