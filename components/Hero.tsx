import Button from "./button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black bg-cover bg-center lg:flex-row gap-2 px-4 bg-[url('../public/pokemon_itzy.jpg')]">
      <div className="absolute inset-x-1/3 inset-y-2/3">
        <div className="">
          <h2 className="text-white font-bold text-4xl py-4">
            Walks In A Winter Wonderland? Check.
          </h2>
          <p className=" text-white py-4 text-xl">
            Stay warm and dry with the weather-ready Mizzle Collection.
          </p>
        </div>
        <div className="flex py-3 gap-4">
          <Button variant="fill">SHOP MEN</Button>
          <Button variant="fill">SHOP WOMEN</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
