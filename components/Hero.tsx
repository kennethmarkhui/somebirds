import Button from "./button";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black lg:flex-row gap-2 px-4">
      <div className="flex flex-col items-center text-center gap-2 lg:flex-1 px-8">
        <h2 className="text-white font-bold md:text-2xl">
          Walks In A Winter Wonderland? Check.
        </h2>
        <p className="text-sm text-white md:text-base">
          Stay warm and dry with the weather-ready Mizzle Collection.
        </p>
      </div>
      <div className="flex">
        <Button variant="fill">SHOP MEN</Button>
        <Button variant="fill">SHOP WOMEN</Button>
      </div>
    </section>
  );
};

export default Hero;
