import styles from "./contact.module.css";
import ContactMessageForm from "@/components/contactMessageForm/contactMessageForm";

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
};

const ContactPage = () => {
    return (
        <div className={styles.container}>
            {/*<div className={styles.imgContainer}>*/}
            {/*    <Image src={contact} alt="" placeholder='blur' priority fill className={styles.img}/>*/}
            {/*</div>*/}

            <div className={styles.formContainer}>
                <ContactMessageForm/>
            </div>
        </div>
    );
};

export default ContactPage;