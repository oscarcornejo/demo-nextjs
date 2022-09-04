import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h2 className={"title"}>
        Hola <Link href="/contacto">Contáctame!</Link>
      </h2>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
