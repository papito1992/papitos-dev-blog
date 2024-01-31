import styles from "./about.module.css"
import Image from "next/image";
import {FaLinkedin} from "react-icons/fa";
import {FaFilePdf} from "react-icons/fa6";

import Link from "next/link";
import about from '../../../public/about.png'

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Me</h2>
                <h1 className={styles.title}>Advocate of solving digital challenges by building teams and people.</h1>
                <p className={styles.desc}>
                    I am a developer with over 5 years of experience in fintech and other enterprise level companies as
                    a consultant or internal employee with a wide stack of technologies under his belt. Currently adding
                    many more (WebFlux, Rsocket, GraphQl, AWS and many more).
                </p>
                <p className={styles.desc}>
                    Residing in beautiful and sunny Cyprus, looking for Local in Cyprus(Nicosia) or Remote work
                    opportunities within Europe.
                </p>
                <p className={styles.desc}>
                    So if you are interested in working with me, offering me a job position, or collaborating on some
                    fun
                    new idea, contact me through LinkedIn or Contact section on this website.
                </p>
                <p className={styles.desc}>
                    View my first commercial website built with NextJs, MaterialUi and wonderful Java(Spring). <Link
                    href={"https://educat.academy"} target={"_blank"}
                    style={{textDecoration: 'underline'}}>Educat.academy</Link>
                </p>
                <p className={styles.desc}>
                    Explore my CV to view my tech stack in details.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>5+</h1>
                        <p>Years of working experience.</p>
                    </div>
                    <div className={styles.box}>
                        <h1>FinTech & Education </h1>
                        <p>Work fields. </p>
                    </div>
                    <div className={styles.box}>
                        <h1>Agile Dev</h1>
                        <p>Years of Agile experience.
                            Meet leading, sprint's, ceremonies, tech talks...</p>
                    </div>
                </div>
            </div>
            <div className={styles.socialContainer}>

                <div className={styles.imgContainer}>
                    <Image src={about} alt="About Image"
                           placeholder='blur'
                           priority
                           width={400} height={300}
                           className={styles.img}
                    />
                    <div className={styles.socialBoxes}>
                        <div className={styles.boxSocial}>
                            <h3>Let's Connect!</h3>
                            <a href={"https://www.linkedin.com/in/paulius-maciukevi%C4%8Dius/"} target="_blank">
                                <FaLinkedin fontSize={36}/>
                            </a>
                        </div>
                        <div className={styles.boxSocial}>
                            <h3>My CV</h3>
                            <Link href={"/cv.pdf"} target={"_blank"}>
                                <FaFilePdf fontSize={36}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutPage