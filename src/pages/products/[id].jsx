import React from "react";
import { useRouter } from "next/router";

const ViewProduct = ({ product }) => {
  return (
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
    </div>
  );
};

export default ViewProduct;

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products");
  const posts = await res.json();

  const paths = posts?.products.map((post) => ({
    params: { id: post?.id.toString() },
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
