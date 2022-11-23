/* eslint-disable @next/next/no-img-element */
import Button from "./Button";

export interface IPromoHero {
  image: string;
  width: string;
  height: string;
  title: string;
  subtitle: string;
  button1: string;
  button2: string;
}

const Promo_Hero = ({
  image,
  width,
  height,
  title,
  subtitle,
  button1,
  button2,
}: IPromoHero): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      {/* 
         <Image src={image} alt="bench" width={width} height={height} />
        */}

      <img src={image} alt="bench" width={width} height={height} />

      <div className="flex flex-col text-center gap-4 mx-auto px-6">
        <h2 className="font-bold text-2xl md:text-4xl">{title}</h2>
        <p className="md:text-xl text-center">{subtitle}</p>
        <div className="flex gap-10 justify-center">
          <Button>{button1}</Button>
          <Button>{button2}</Button>
        </div>
      </div>
    </div>
  );
};

export default Promo_Hero;
