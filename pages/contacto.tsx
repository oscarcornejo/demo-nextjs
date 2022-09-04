import Link from "next/link";
import { ReactNode } from "react";
import DarkLayout from "../layouts/DarkLayout";
import MainLayout from "../layouts/MainLayout";

export default function Contacto() {
  return (
    <>
      <h1>Contacto Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home!</Link>
      </h1>
    </>
  );
}

Contacto.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
