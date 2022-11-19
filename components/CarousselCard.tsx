/* eslint-disable @next/next/no-img-element */
export interface ICard {
  image: string;
  name: string;
  description: string;
}

const CarousselCard = ({ image, name, description }: ICard): JSX.Element => {
  return (
    <div className="w-full h-full rounded-lg shadow-md bg-slate-50 max-w-md">
      <img
        className="object-cover"
        src="http://placekitten.com/g/500/300"
        alt="image"
      />
      <div className="p-4">
        <h4 className="text-xl font-bold tracking-tight py-4">{name}</h4>
        <p className="mb-2 leading-normal">{description}</p>
      </div>
    </div>
  );
};
export default CarousselCard;
