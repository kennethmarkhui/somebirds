import { useState } from "react";

import Button from "./Button";
import Caroussel_card from "./CarousselCard";

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
    idx: 0,
    image: "yes",
    name: "Wool Runner",
    description: "Cozy Sneaker",
  },
  {
    idx: 1,
    image: "yes",
    name: "Tree Dasher 2",
    description: "Comfy, Breezy, Everyday Runs",
  },
  {
    idx: 1,
    image: "yes",
    name: "Tree Flyer",
    description: "Light, Bouncy, Long Distance Runs",
  },
  {
    idx: 1,
    image: "yes",
    name: "Trail Runner SWT",
    description: "Durable, Grippy, Off Road Terrain",
  },
  {
    idx: 2,
    image: "yes",
    name: "Fluff Apparel",
    description: "Soft-To-The-Touch Apparel",
  },
  {
    idx: 2,
    image: "yes",
    name: "R & R Sweatpant",
    description: "Soft-Yet-Structured Sweats",
  },
  {
    idx: 2,
    image: "yes",
    name: "Wool Lounger Fluff",
    description: "Cozy Feel, Fluffy Material",
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
