import Link from "next/link";

const HomePage = () => {
  return (
    <main className="p-5">
      <h1>hello world</h1>
      <Link href="/products" className="mt-4 inline-block text-blue-600 hover:underline">
        Ir para Products
      </Link>
    </main>
  );
};

export default HomePage;
