"use client"
import styles from "./adminPosts.module.css";
import Image from "next/image";
import {deletePost, getPosts} from "@/lib/action";
import {useEffect, useState} from "react";
import AdminEditPostForm from "@/components/adminEditPostForm/adminEditPostForm";

const AdminPosts = () => {
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [posts, setPosts] = useState(null)
    const getAllPosts = async () => {
        let posts = await getPosts();
        setPosts(posts)
    }
    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            {posts && posts?.map((post) => (
                <div className={styles.post} key={post?.id}>
                    <div className={styles.detail}>
                        <Image
                            src={post?.img || "/noAvatar.png"}
                            alt=""
                            width={50}
                            height={50}
                        />
                        <span className={styles.postTitle}>{post?.title}</span>
                    </div>
                    <div className={styles.buttonBox}>
                        <form action={deletePost}>
                            <input type="hidden" name="id" value={post?.id}/>
                            <button className={styles.postButton}>Delete</button>
                        </form>
                        <button className={styles.editButton} onClick={() => setIsEditOpen(prevState =>
                            !prevState)}>{isEditOpen ? "Close edit" : "Edit"}
                        </button>
                    </div>
                    {isEditOpen && <AdminEditPostForm post={post}/>}
                </div>
            ))}
        </div>
    );
};

export default AdminPosts;