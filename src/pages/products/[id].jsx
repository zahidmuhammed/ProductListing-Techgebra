// import React from "react";
// import { useRouter } from "next/router";

// const ViewProduct = ({ product }) => {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       {product?.title}
//     </div>
//   );
// };

// export default ViewProduct;

// export async function getStaticPaths() {
//   const res = await fetch("https://dummyjson.com/products");
//   const posts = await res.json();

//   const paths = posts?.products.map((post) => ({
//     params: { id: post?.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps() {
//   const router = useRouter();
//   const { id } = router.query;
//   const response = await fetch(`https://dummyjson.com/products/${id}`);
//   const data = await response.json();

//   return {
//     props: { product: data },
//   };
// }
