import { InferGetStaticPropsType } from "next";
import client from "~/lib/client";

export const getStaticProps = async () => {
  const { data } = await client.getAllProducts();
  return {
    props: {
      products: data.products?.results,
    },
  };
};

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <h1>Products</h1>
      {products ? (
        products.map((product) => {
          return (
            <div key={product?.id}>
              <h2>{product?.name}</h2>
              <p>{product?.description}</p>
              <p>{product?.slug}</p>
            </div>
          );
        })
      ) : (
        <p>No products found</p>
      )}
    </main>
  );
}
