import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is the home page" />
      </Head>
      <h1 className={styles.title}>Home</h1>
      <Link href="/about">About</Link>
      <Image src="/vercel.svg" alt="Vercel Logo" width="200" height="200" />
    </>
  );
};

export default Home;
