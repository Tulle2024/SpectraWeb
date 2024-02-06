import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import "./styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

// metadata
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Menubar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
