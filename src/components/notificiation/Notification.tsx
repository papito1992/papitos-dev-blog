"use client"
import styles from "./notification.module.scss"
import {useEffect} from "react";
import {useAppContext} from "@/context";

const Notification = () => {
    let {notificationState, setNotificationState} = useAppContext();
    useEffect(() => {
    }, [notificationState]);

    return (
        <>
            {notificationState.isOpen && <div className={styles.message_container}>
                <div className={styles.wrapper}>
                    <div className={styles.message}>
                        <div className={styles.title}>
                            {notificationState.notificationTitle}
                        </div>
                        <p>{notificationState.notificationMessage}</p>
                    </div>
                </div>
            </div>}
        </>

    )
}
export default Notification