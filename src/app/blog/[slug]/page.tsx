import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import {Suspense} from "react";
import {getPost} from "@/lib/data";
import {remark} from 'remark';
import html from 'remark-html';
// FETCH DATA WITH AN API
const getData = async (slug) => {
    const res = await fetch(`${process.env.APP_HOSTNAME}/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};

export const generateMetadata = async ({params}) => {
    const {slug} = params;

    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
    };
};

const SinglePostPage = async ({params}) => {
    const {slug} = params;

    // FETCH DATA WITH AN API
    // const post = await getData(slug);

    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);
    const processedContent = await remark()
        .use(html)
        .process(post.desc);
    return (
        <div className={styles.container}>
            {post?.img && (
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img}/>
                </div>
            )}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId}/>
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
                    </div>
                </div>
                <div className={styles.content} dangerouslySetInnerHTML={{__html: processedContent.toString()}}/>
            </div>
        </div>
    );
};

export default SinglePostPage;