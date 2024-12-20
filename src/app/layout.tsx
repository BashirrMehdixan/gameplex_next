import React from "react";
import type {Metadata} from "next";
import Navbar from "@/partial/Navbar";
import Footer from "@/partial/Footer";


import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Home - Gameplex",
    description: "All games in one website",
    icons: "/images/favicon.png",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
