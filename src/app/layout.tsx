import {Inter} from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Notification from "@/components/notificiation/Notification";
import {AppWrapper} from "@/context";

const inter = Inter({subsets: ["latin"]});
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppWrapper>
            <div
                style={{
                    // use relative position for the parent div
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    // zIndex: -10,
                    background: "radial-gradient(circle, rgba(0,0,0,0.406582701439951) 0%, rgba(0,0,0,0.36456589471726186) 100%);"
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
                        style={{objectFit: 'cover'}}
                        alt={"Background Image"}
                    />
                </div>
                <div style={{position: "sticky", zIndex: 2}}>
                    <div
                        style={{position: "fixed", bottom: "4%", right: "4%", zIndex: 22}}
                    >
                        <Notification/>
                    </div>
                </div>
                <div className="container">
                    <Navbar/>

                    {children}
                    <Footer/>
                </div>
            </div>
        </AppWrapper>
        </body>
        </html>
    );
}
