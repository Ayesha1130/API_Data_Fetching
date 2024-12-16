"use client";

import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}
interface Props {
  products: ProductProps[];
}
const Products = ({ products }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-5 py-5">
      {products.map((item) => (
        <Link
          href={{ pathname: "/singleproduct", query: { _id: item._id } }}
          key={item._id}
        >
          <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
            <Image
              src={item?.image}
              alt="productImage"
              width={500}
              height={500}
              className="w-full h-80 object-cover"
            />

            <div className="flex flex-col gap-1 px-4 pb-2 text-sm">
              <h3 className="font-semibold">{item.title}</h3>

              <p>Price: ${item.price}</p>

              <div className="flex justify-between">
                <button>Add to cart</button>
                <button className="uppercase text-sx font-semibold hover:text-blue-400 duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
