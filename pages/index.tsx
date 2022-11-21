import type { GetServerSideProps } from "next";
import {
  Image as ShopifyImage,
  type StorefrontApiResponseOk,
} from "@shopify/hydrogen-react";
import { request as graphqlRequest } from "graphql-request";

import CarouselComponent from "../components/CarouselComponent";
import Button from "../components/Button";
import Hero from "../components/Hero";
import SignUpModule from "../components/SignUpModule";
import PromoHero, { IPromoHero } from "../components/PromoHero";
import Tabs from "../components/Tabs";
import { graphql } from "../gql/gql";
import type { IndexQueryQuery } from "../gql/graphql";
import { shopifyClient } from "../lib/shopify";

const homePromoHeroContent: IPromoHero = {
  image: "bench_itzy.jpg",
  width: "4096",
  height: "768",
  title: "Jingle All The Way In Any Weather",
  subtitle:
    "The weather-repellent Mizzle Collection is ready to keep you cozy.",
  button1: "SHOP MEN",
  button2: "SHOP WOMEN",
};

const homeSecondPromoHeroContent: IPromoHero = {
  image: "kda_ahri.jpg",
  width: "4096",
  height: "768",
  title: "Stay Miles Ahead of the Holiday Hustle",
  subtitle:
    "Dash through your holiday gift list with running shoes designed to keep them - and you - moving.",
  button1: "SHOP MEN",
  button2: "SHOP WOMEN",
};

const homeThirdPromoHeroContent: IPromoHero = {
  image: "kda_ahri.jpg",
  width: "4096",
  height: "768",
  title: "Can Sustainable Shoes Save The Planet?",
  subtitle:
    "We think it's a good place to start. Explore our approach to sustainable footwear, sustainable apparel and reducing our enviornmental impact. Check out our progress so far, and our bold list of commitments for 2025.",
  button1: "OUR SUSTAINABLE PRACTICES",
  button2: "SHOP WOMEN",
};

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
    <>
      <Hero />
      <Button>Shop Little Kids</Button>
      <Button variant="fill">Shop Big Kids</Button>
      <Tabs />
      <PromoHero
        image={homePromoHeroContent.image}
        width={homePromoHeroContent.width}
        height={homePromoHeroContent.height}
        title={homePromoHeroContent.title}
        subtitle={homePromoHeroContent.subtitle}
        button1={homePromoHeroContent.button1}
        button2={homePromoHeroContent.button2}
      />
      <CarouselComponent title="New Arrivals" />
      <PromoHero
        image={homeSecondPromoHeroContent.image}
        width={homeSecondPromoHeroContent.width}
        height={homeSecondPromoHeroContent.height}
        title={homeSecondPromoHeroContent.title}
        subtitle={homeSecondPromoHeroContent.subtitle}
        button1={homeSecondPromoHeroContent.button1}
        button2={homeSecondPromoHeroContent.button2}
      />
      <CarouselComponent title="Shop The Collections" />
      <PromoHero
        image={homeThirdPromoHeroContent.image}
        width={homeThirdPromoHeroContent.width}
        height={homeThirdPromoHeroContent.height}
        title={homeThirdPromoHeroContent.title}
        subtitle={homeThirdPromoHeroContent.subtitle}
        button1={homeThirdPromoHeroContent.button1}
        button2={homeThirdPromoHeroContent.button2}
      />
      <CarouselComponent title="Stories" />

      {collections.map((collection) => (
        <div key={collection.id}>{collection.title}</div>
      ))}
      {products.map((product) => (
        <div key={product.id}>
          <ShopifyImage
            data={product.variants.nodes[0].image ?? {}}
            width={250}
            loading="eager"
            className="h-80"
          />
          <span>{product.title}</span>
        </div>
      ))}
      <SignUpModule />
    </>
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
