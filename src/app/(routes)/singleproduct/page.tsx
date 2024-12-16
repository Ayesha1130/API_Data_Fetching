import { getSingleProduct } from "@/helper";
import Image from "next/image";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Singleproduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  return (
    <div className="max-w-screen-xl px-9 grid grid-cols-1 md:grid-cols-3 items-center">
      <Image src={product?.image || '/path/to/fallback-image.jpg'} alt="productImage" width={500} height={500} />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{product?.title}</h1>
        <p>{product?.description}</p>
        <p> Price : ${product?.price}</p>
        <p>Previous Price : ${product?.previousPrice}</p>
        <p>Category : {product?.category}</p>
        <p>{product?.isNew && "New Item"}</p>
      </div>
    </div>
  );
};

export default Singleproduct;
