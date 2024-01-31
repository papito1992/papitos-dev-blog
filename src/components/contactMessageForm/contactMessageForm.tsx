"use client";

import {handleContactMessage} from "@/lib/action";
import styles from "./contactMessageForm.module.css";
import {useFormState} from "react-dom";
import {useAppContext} from "@/context";
import {useEffect, useState} from "react";

export default function ContactMessageForm(props) {
    const [state, formAction] = useFormState(handleContactMessage, false);
    let {notificationState, setNotificationState} = useAppContext();
    const [notificationTrigger, setNotificationTrigger] = useState(false)

    useEffect(() => {
        if (state.responseStatus === true) {
            setNotificationState({
                isOpen: true,
                notificationMessage: state.responseMessage,
                notificationTitle: "MSG SENT",
                timer: setTimeout(() => {
                    setNotificationState(false);
                }, 3000)
            });
        } else if (state.responseStatus === false) {
            setNotificationState({
                isOpen: true,
                notificationMessage: state.responseMessage,
                notificationTitle: "FAILED MSG SENT"
            });
            const timer = setTimeout(() => {
                setNotificationState(false);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [state]);


    return (
        <>
            <div className={styles.formContainer}>
                <form action={formAction} className={styles.form}>
                    <input type="text" placeholder="Name and Surname" name={"name"}/>
                    <input type="text" placeholder="Email Address" name={"email"}/>
                    <input type="text" placeholder="Phone Number (Optional)" name={"phone"}/>
                    <textarea
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        name={"message"}
                    ></textarea>
                    <button onClick={() => setNotificationTrigger(!notificationTrigger)}>Send</button>
                    {state?.error}
                </form>
            </div>
        </>

    );
};