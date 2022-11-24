/* eslint-disable @next/next/no-img-element */
export interface CarouselCardProps {
  image: string;
  name: string;
  description: string;
}

const CarouselCard = ({
  image,
  name,
  description,
}: CarouselCardProps): JSX.Element => {
  return (
    <div className="group w-full h-full shadow-md flex flex-col bg-slate-50">
      <div className="overflow-hidden">
        <img
          className="object-cover group-hover:scale-105 duration-300"
          src="http://placekitten.com/g/500/300"
          alt="image"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-bold tracking-tight">{name}</h4>
        <p className="leading-normal">{description}</p>
      </div>
    </div>
  );
};
export default CarouselCard;
