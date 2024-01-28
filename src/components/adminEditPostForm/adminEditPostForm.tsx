"use client"

import {editPost} from "@/lib/action";
import styles from "./adminEditPostForm.module.css";
import {useFormState} from "react-dom";

const AdminEditPostForm = ({post}) => {
    const [state, formAction] = useFormState(editPost, undefined);
    console.log(post)
    return (
        <form action={formAction} className={styles.container}>
            <h1>Edit</h1>
            <input type="hidden" name="_id" value={post._id} />
            <input type="hidden" name="userId" value={post.userId} />
            <input type="text" name="title" placeholder="Title" defaultValue={post.title}/>
            <input type="text" name="slug" placeholder="slug" defaultValue={post.slug}/>
            <input type="text" name="img" placeholder="img" defaultValue={post.img}/>
            <textarea type="text" name="desc" placeholder="desc" defaultValue={post.desc} rows={10} />
            <button>Save Changes</button>
            {state?.error}
        </form>
    );
};

export default AdminEditPostForm;