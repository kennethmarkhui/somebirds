import type { GetServerSideProps } from "next";
import {
  Image as ShopifyImage,
  type StorefrontApiResponseOk,
} from "@shopify/hydrogen-react";
import { request as graphqlRequest } from "graphql-request";

import Footer from "../components/footer";
import Caroussel_card from "../components/caroussel-card";
import Button from "../components/button";
import Hero from "../components/Hero";
import Form from "../components/form";
import { graphql } from "../gql/gql";
import type { IndexQueryQuery } from "../gql/graphql";
import { shopifyClient } from "../lib/shopify";

export default function Home({
  data,
  errors,
}: StorefrontApiResponseOk<IndexQueryQuery>) {
  if (!data || errors) {
    console.error(errors);
    return <div>Whoops there was an error! Please refresh and try again.</div>;
  }

  const collections = data.collections.nodes.map((collection) => collection);
  const products = data.products.nodes.map((product) => product);
  return (
    <div>
      <Hero />
      <Button>Shop Little Kids</Button>
      <Button variant="fill">Shop Big Kids</Button>
      <Caroussel_card
        image="yes"
        name="Cold Weather Run"
        description="water-repellant running shoes so you can clock miles rain or shine or both"
      />
      <Form />
      {collections.map((collection) => (
        <div key={collection.id}>{collection.title}</div>
      ))}
      {products.map((product) => (
        <div key={product.id}>
          <ShopifyImage
            data={data.products.nodes[0].variants.nodes[0].image || {}}
            width={250}
            loading="eager"
          />
          <span>{product.title}</span>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await graphqlRequest({
      url: shopifyClient.getStorefrontApiUrl(),
      document: query,
      requestHeaders: shopifyClient.getPublicTokenHeaders(),
    });

    return { props: { data: response, errors: null } };
  } catch (err) {
    console.error(err);
    return { props: { data: null, errors: [(err as Error).toString()] } };
  }
};

const query = graphql(`
  query IndexQuery {
    shop {
      name
    }
    collections(first: 5) {
      nodes {
        id
        title
        handle
      }
    }
    products(first: 10) {
      nodes {
        # if you uncomment 'blah', it should have a GraphQL validation error in your IDE if you have a GraphQL plugin. It should also give an error during 'npm run dev'
        # blah
        id
        title
        publishedAt
        handle
        variants(first: 1) {
          nodes {
            id
            image {
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
`);
