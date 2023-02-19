import React from "react";
import Link from "next/link";
import { BsCardList } from "react-icons/bs";

const ViewProduct = ({ product }) => {
  return (
    <>
      <div className="h-screen flex flex-col  justify-center items-center">
        <div className="flex  justify-center">
          <img
            src={product.thumbnail}
            height={100}
            width={100}
            className="object-contain"
          />
        </div>
        <div>{product?.title}</div>
        <div>{product?.description}</div>
        <div>₹ {product?.price}</div>
        <div className="mt-20">
          <Link href="/">
            <BsCardList size={30} className="text-gray-400" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products");
  const posts = await res.json();
  const totalItems = [...Array(posts.total).keys()];

  const paths = totalItems.map((item) => ({
    params: { id: item.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await response.json();

  return {
    props: { product: data },
  };
}
