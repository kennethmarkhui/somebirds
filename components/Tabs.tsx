import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Swiper as ISwiper } from "swiper";
import Button from "./Button";

const tabList = ["For Everyday", "For Running", "For Lounging"];

interface ITabItem {
  idx: number;
  image: string;
  name: string;
  description: string;
}

interface TabItemProps {
  item: ITabItem;
  overlay?: boolean;
}

const tabItems: ITabItem[] = [
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
  const swiperRef = useRef<ISwiper | undefined>();

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(selectedIndex * 3);
  }, [swiperRef, selectedIndex]);

  return (
    <div>
      <h2 className="flex justify-center font-bold text-4xl p-6">
        Our Best-Selling Gifts
      </h2>

      <div className="max-w-screen-xl mx-auto space-y-8 px-4">
        {/* TAB LIST */}
        <div className="flex justify-around border-b-2 text-2xl">
          {tabList.map((tab, index) => (
            <button
              key={`${tab}-${index}`}
              onClick={() => {
                setSelectedIndex(index);
              }}
              className="p-4"
            >
              <h4
                className={`hover:text-black font-bold ${
                  selectedIndex === index ? "text-black" : "text-gray-600"
                }`}
              >
                {tab}
              </h4>
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        {/* DESKTOP */}
        <div className="hidden md:grid grid-flow-col auto-cols-fr gap-6 justify-center">
          {tabItems.map(
            (tabItem, index) =>
              selectedIndex === tabItem.idx && (
                <TabItem
                  key={`${tabItem.name}-${index}`}
                  item={tabItem}
                  overlay
                />
              )
          )}
        </div>
        {/* MOBILE */}
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="md:hidden p-1"
        >
          {tabItems.map((tabItem, index) => (
            <SwiperSlide className="h-auto" key={`${tabItem.name}-${index}`}>
              <TabItem key={`${tabItem.name}-${index}`} item={tabItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tabs;

const TabItem = ({
  item: { name, description, image, idx },
  overlay,
}: TabItemProps) => {
  return (
    <div className="group flex flex-col w-full h-full shadow">
      <div className="w-full relative">
        <div className="overflow-hidden relative pb-[100%]">
          <img
            src="http://placekitten.com/g/500/300"
            alt="a"
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
        {overlay && (
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black/50 duration-300">
            <Button>SHOP NOW</Button>
          </div>
        )}
      </div>
      <div className="p-4 md:p-8 space-y-2 flex flex-col flex-auto justify-between">
        <div className="divide-y-2 space-y-2">
          <h3 className="text-xl font-bold tracking-tight">{name}</h3>
          <p className="pt-2">{description}</p>
        </div>

        {!overlay && (
          <div>
            <Button fullWidth>SHOP NOW</Button>
          </div>
        )}
      </div>
    </div>
  );
};
