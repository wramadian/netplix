import { FilmDetailDialog, Navbar } from "@/components";
import { Box, Dialog } from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netplix",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Box px={3} py={2}>
          {children}
        </Box>
        <FilmDetailDialog />
      </body>
    </html>
  );
}
