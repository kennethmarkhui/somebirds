import CarouselCard, { CarouselCardProps } from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const carouselContent: CarouselCardProps[] = [
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

interface CarouselProps {
  title: string;
}

const Carousel = ({ title }: CarouselProps) => {
  return (
    <div className="space-y-6 py-4">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-bold text-2xl xl md:text-4xl">{title}</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
        }}
        centeredSlides={true}
        navigation={{
          disabledClass: "opacity-0 cursor-auto pointer-events-none",
        }}
        modules={[Navigation]}
        className="px-8"
      >
        {carouselContent.map((item, index) => (
          <SwiperSlide
            key={`${item.name}-${index}`}
            className="h-auto max-w-md"
          >
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

export default Carousel;
