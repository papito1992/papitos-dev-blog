"use client"
import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";
import {useAppContext} from "@/context";
import hero from '../../public/hero.png'

export default function Home() {
    let {notificationState, setNotificationState} = useAppContext();
    console.log(notificationState)
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Papito's Dev Blog</h1>
                <p className={styles.desc}>Blogger that posts about developing With Java(Spring) & NextJs.
                    Talks about Dev life topics, such as sustainable motivation, life and work balance at high
                    performance levels.
                    Posts Tech overviews, useful code snippets and much more here.</p>
                <p className={styles.desc}>Resources for people who want to know more about me or just get
                    in-touch are in my <Link href={"/about"} style={{textDecoration: 'underline'}}>About Me</Link> page
                    with my CV,
                    social media and more.</p>
                <p className={styles.desc}>This website was build with NextJS 14 with server actions & mongodb!</p>
                <div className={styles.buttons}>
                    <Link href={"/about"}>

                        <button className={styles.button}>About</button>
                    </Link>
                    <Link href={"/contact"}>

                        <button className={styles.buttonWhite}>Contact</button>
                    </Link>
                </div>
                {/*<div className={styles.brands}>*/}
                {/*    <Image src="/brands.png" alt="" fill className={styles.brandImg}/>*/}
                {/*</div>*/}
            </div>
            <div className={styles.imgContainer}>
                <Image src={hero} alt=""
                       placeholder='blur'
                       priority fill style={{objectFit: 'scale-down'}}/>
            </div>

        </div>
    );
}
