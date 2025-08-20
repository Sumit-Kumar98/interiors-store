import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";

const url = "/products?feaured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  // console.log(response);
  const products = response.data.data;

  return { products };
};

const Landing = () => {
  // const { products: data } = useLoaderData();
  // console.log(data);

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
