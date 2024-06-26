import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContextProvider from "@/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
        <ToastContainer />
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
