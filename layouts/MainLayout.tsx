import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>App Home</title>
        <meta name="description" content="App home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
