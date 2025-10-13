import "./globals.css";

import Localfont from "next/font/local";

const myFont = Localfont({
  src: "./font/faktum.otf",
  display: "swap",
});

export const metadata = {
  title: "Riact || Home",
  description: "Best it support here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1257.0"
        data-gr-ext-installed=""
        className={` ${myFont.className} antialiased bg-[#0C0C0D]`}
      >
        {children}
      </body>
    </html>
  );
}
