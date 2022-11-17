import { useState } from "react";
import Button from "./button";
import Caroussel_card from "./caroussel-card";

const categories = ["For Everyday", "For Running", "For Lounging"];

const Category_Carousel = () => {
  const [category, setCategory] = useState(categories[0]);

  const categoryItems = [
    {
      category: "0",
      image: "yes",
      name: "Fluff Collector",
      description: "Soft-To-The-Touch Shoes & Apparel",
    },
    {
      category: "0",
      image: "yes",
      name: "Wool Dweller",
      description: "Cozy Slipper",
    },
    {
      category: "0",
      image: "yes",
      name: "Wool Runner",
      description: "Cozy Sneaker",
    },
    {
      category: "1",
      image: "yes",
      name: "stone",
      description: "magic Sneaker",
    },
  ];

  return (
    <div>
      <div className="flex justify-center font-bold text-4xl p-6">
        Our Best-Selling Gifts
      </div>
      <div className="flex justify-center space-x-56 p-4">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setCategory(category)}
            className="font-bold"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="flex gap-6 justify-center">
        {categoryItems.map(({ category, image, name, description }) => (
          <Caroussel_card
            image={image}
            name={name}
            description={description}
          ></Caroussel_card>
        ))}
      </div>
      <div>
        {categoryItems.map(({ category }) => {
          return category ? 0 : category ? 1 : 2;
        })}
      </div>
      <p> Your payment selection: {category} </p>
    </div>
  );
};

export default Category_Carousel;
