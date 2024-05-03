"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Footer from "../../comps/footer";
import SignupNavbar from "../../comps/signupNavbar";
import './../../globals.css';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col  items-center`}>
        <SignupNavbar />
        <motion.div className="w-full"
        key={children.key} //keep track of each page
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7}}>
            {children}
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}