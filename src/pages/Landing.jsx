import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";

const url = "/products?feaured=true";

export const loader = (queryClient) => async () => {
  const response = await customFetch(url);
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
