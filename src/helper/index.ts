interface Product {
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
const getData = async():Promise<Product[]>=>{
  const res = await fetch("https://jsonserver.reactbd.com/phone")
  if (!res.ok){
    throw new Error("Data not found")
  }
  return res.json();
}
export const getSingleProduct = async(_id:number):Promise<Product | undefined >=>{
    const item = await getData()
    const singleItem = await item.find((product)=>product._id === _id)
    return singleItem;
}