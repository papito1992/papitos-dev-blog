import {getContactMessages, getUsers} from "@/lib/data";
import styles from "./adminContactMessages.module.css";
import { deleteMessage } from "@/lib/action";

const AdminContactMessages = async () => {
    const messages = await getContactMessages();

    return (
        <div className={styles.container}>
            <h1>Contact Messages</h1>
            {messages.map((message) => (
                <div className={styles.user} key={message.id}>
                    <div className={styles.detail}>
                        <span>{message.name}</span>
                        <span>{message.email}</span>
                        <span>{message?.phone}</span>
                        <span>{message.message}</span>
                    </div>
                    <form action={deleteMessage}>
                        <input type="hidden" name="id" value={message.id} />
                        <button className={styles.userButton}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminContactMessages;