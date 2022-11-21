import CarouselCard, { ICard } from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const carouselContent: ICard[] = [
  {
    name: "Women's Wool Runner",
    description: "Limited Edition Color, Buoyant Mint",
    image: "yes",
  },
  {
    name: "Men's Wool Piper Woven",
    description: "Limited Edition Color, Hazy Indigo",
    image: "yes",
  },
  {
    name: "Women's Wool Breezer",
    description: "Classic Color, Natural Black",
    image: "yes",
  },
  {
    name: "Men's Wool Dasher Mizzle",
    description: "Limited Edition Color, Natural Black",
    image: "yes",
  },
  {
    name: "Wool Dweller Fluff",
    description: "Limited Edition Color, Natural White",
    image: "yes",
  },
  {
    name: "Women's Wool Breezer",
    description: "Limited Edition Color, Hazy Beige",
    image: "yes",
  },
  {
    name: "Wool Dweller",
    description: "Limited Edition Color, Buoyant Pink",
    image: "yes",
  },
  {
    name: "Men's Wool Dasher Fluff",
    description: "Limited Edition Color, Natural Black",
    image: "yes",
  },
  {
    name: "Women's Wool Runner Fluff",
    description: "Limited Edition Color, Natural White",
    image: "yes",
  },
  {
    name: "Men's Trail Runner SWT Mizzle",
    description: "Limited Edition Color, Hazy",
    image: "yes",
  },
];

interface ICarouselCompnent {
  title: string;
}

const CarouselComponent = ({ title }: ICarouselCompnent) => {
  return (
    <div className="space-y-10 py-4">
      <div className="max-w-xl mx-auto">
        <p className="font-bold text-3xl ">{title}</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {carouselContent.map((item, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <CarouselCard
              image={item.image}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
