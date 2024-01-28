import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div
            style={{
                // use relative position for the parent div
                position: "relative",
                width: "100vw",
                height: "100vh",
                // clipPath: 'inset(0 0 0 0)',
            }}
        >
            <div
                style={{
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    left: '0',
                    top: '0',
                    zIndex: -22
                }}
            >
            <Image
                src="https://images.pexels.com/photos/13859586/pexels-photo-13859586.jpeg"
                priority={true}
                fill={true}
                style={{objectFit:'cover'}}
                alt={"Background Image"}
            />
            </div>
            <div className="container">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    );
}