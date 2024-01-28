"use client";

import {addUser, handleContactMessage} from "@/lib/action";
import styles from "./contactMessageForm.module.css";
import { useFormState } from "react-dom";

const ContactMessageForm = () => {
    const [state, formAction] = useFormState(handleContactMessage, undefined);

    return (
        <div className={styles.formContainer}>
            <form action={formAction} className={styles.form}>
                <input type="text" placeholder="Name and Surname" name={"name"} />
                <input type="text" placeholder="Email Address" name={"email"}/>
                <input type="text" placeholder="Phone Number (Optional)" name={"phone"}/>
                <textarea
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    name={"message"}
                ></textarea>
                <button>Send</button>
                {state?.error}
            </form>
        </div>
    );
};

export default ContactMessageForm;