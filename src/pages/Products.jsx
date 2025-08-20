import React from "react";
import { Filters, Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // Method 1
    // const params = new URL(request.url).searchParams;
    // const search = params.get("search");
    // console.log(search);

    // Method 2
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // console.log(params);
    // console.log(params.search);

    const response = await customFetch(url, {
      params,
    });
    const products = response.data.data;
    const meta = response.data.meta;
    // console.log(response);
    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
    </>
  );
};

export default Products;
