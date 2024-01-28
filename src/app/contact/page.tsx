// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import ContactMessageForm from "@/components/contactMessageForm/contactMessageForm";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
};

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img}/>
            </div>
            <ContactMessageForm/>
        </div>
    );
};

export default ContactPage;