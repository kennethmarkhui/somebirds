import { useState } from "react";

import Button from "./button";
import Caroussel_card from "./caroussel-card";

const tabList = ["For Everyday", "For Running", "For Lounging"];

const tabItems = [
  {
    idx: 0,
    image: "yes",
    name: "Fluff Collector",
    description: "Soft-To-The-Touch Shoes & Apparel",
  },
  {
    idx: 0,
    image: "yes",
    name: "Wool Dweller",
    description: "Cozy Slipper",
  },
  {
    idx: 2,
    image: "yes",
    name: "Wool Runner",
    description: "Cozy Sneaker",
  },
  {
    idx: 1,
    image: "yes",
    name: "stone",
    description: "magic Sneaker",
  },
];

const Tabs = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-center font-bold text-4xl p-6">
        Our Best-Selling Gifts
      </div>

      {/* TAB LIST */}
      <div className="flex justify-center space-x-56 p-4">
        {tabList.map((tab, index) => (
          <Button
            key={`${tab}-${index}`}
            onClick={() => setSelectedIndex(index)}
            className="font-bold"
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="flex gap-6 justify-center">
        {tabItems.map(
          ({ name, image, description, idx }, index) =>
            selectedIndex === idx && (
              <Caroussel_card
                key={`${name}-${index}`}
                image={image}
                name={name}
                description={description}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
