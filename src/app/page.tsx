import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link";
import cv from "../../public/test.pdf"
export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Advanced Software Solutions</h1>
                <p className={styles.desc}>News about developing With Java(Spring) & NextJs.
                    Consultations, tech talks, useful code snippets and much more in my dev blog page.</p>
                <p className={styles.desc}>Resources for people who want to know more about me or just get
                    in-touch in my <Link href={"/about"} style={{textDecoration: 'underline'}}>About</Link> page with my CV,
                    social media and more.</p>
                <div className={styles.buttons}>
                    <Link href={"/about"}>

                    <button className={styles.button}>About</button>
                    </Link>
                    <Link href={"/contact"}>

                    <button className={styles.buttonWhite}>Contact</button>
                    </Link>
                </div>
                <div className={styles.brands}>
                    <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
                </div>
            </div>
            <div className={styles.imgContainer}>
                {/*<Image src="/hero.gif" alt="" fill className={styles.heroImg}/>*/}
                <Image src="/hero.png" alt="" fill  style={{objectFit:'scale-down'}}/>
            </div>

        </div>
    );
}
