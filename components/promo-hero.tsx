import Button from "./button";

const Promo_Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="py-4">
        <img src="/bench_itzy.jpg" alt="bench_itzy" className="w-full " />
      </div>

      <div className="mx-auto p-4">
        <div className="p-4 flex justify-center font-bold text-4xl">
          Jingle All The Way In Any Weather
        </div>
        <div className="p-4 flex justify-center text-xl">
          The weather-repellent Mizzle Collection is ready to keep you cozy.
        </div>
        <div className="flex gap-10 p-4 justify-center">
          <Button>SHOP MEN</Button>
          <Button>SHOP WOMEN</Button>
        </div>
      </div>
    </div>
  );
};

export default Promo_Hero;
