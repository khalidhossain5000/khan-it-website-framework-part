import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import Footer from "@/Components/Shared/Footer/Footer";
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export const metadata = {
  title: "Khan It Simple Website Layout Using Nextjs",
  description: "Khan It Website With React Framework -(NextJs)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${inter.variable} antialiased`}
      >
        <NavBar/>
        
        {children}

        <Footer/>
      </body>
    </html>
  );
}
