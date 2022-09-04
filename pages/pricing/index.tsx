import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";

export default function pricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home!</Link>
      </h1>
    </MainLayout>
  );
}
