/* eslint-disable @next/next/no-img-element */
import Button from "./button";

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
    <div className="flex flex-col">
      <div className="py-4">
        {/* 
         <Image src={image} alt="bench" width={width} height={height} />
        */}

        <img src={image} alt="bench" width={width} height={height} />
      </div>

      <div className="mx-auto p-4">
        <div className="p-4 flex justify-center font-bold text-4xl">
          {title}
        </div>
        <div className="p-4 flex justify-center text-xl">{subtitle}</div>
        <div className="flex gap-10 p-4 justify-center">
          <Button>{button1}</Button>
          <Button>{button2}</Button>
        </div>
      </div>
    </div>
  );
};

export default Promo_Hero;
