import Products from "@/components/Products";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Data not found");
  }
  return res.json();
};

const page = async () => {
  const products = await getData();

  return (
    <main>
      <Products products={products} />
    </main>
  );
};

export default page;
