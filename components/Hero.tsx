import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center bg-[url('../public/pokemon_itzy.jpg')]">
      <div className="absolute inset-0 max-w-screen-xl mx-auto my-8 sm:my-16 px-6">
        <div className="flex flex-col gap-4 h-full justify-end">
          <h2 className="text-white font-bold text-3xl lg:text-5xl">
            Walks In A Winter Wonderland? Check.
          </h2>
          <p className=" text-white font-bold">
            Stay warm and dry with the weather-ready Mizzle Collection.
          </p>
          <div className="flex gap-4">
            <Button variant="fill">SHOP MEN</Button>
            <Button variant="fill">SHOP WOMEN</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
