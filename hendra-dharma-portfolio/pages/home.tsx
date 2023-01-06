import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Hendra Widjaya Dharma</title>
                <meta name="description" content="Created by Hendra Widjaya Dharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>pages/index.tsx</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                    <div className={styles.thirteen}>
                        <Image
                            src="/thirteen.svg"
                            alt="13"
                            width={40}
                            height={31}
                            priority
                        />
                    </div>
                </div>

                <div className={styles.grid}>
                    <a
                        href="(url)"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            About me <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Find in-depth information about me and&nbsp; my journey.
                        </p>
                    </a>

                    <a
                        href="(url)"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            My Works <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about my previous &nbsp; Projects!
                        </p>
                    </a>

                    <a
                        href="(url)"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Gallery <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Discover &nbsp; my project's documentations.
                        </p>
                    </a>

                    <a
                        href="(url)"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Contact me <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Instantly reach me via&nbsp; Whatsapp.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}
