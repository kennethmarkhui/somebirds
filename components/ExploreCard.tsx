/* eslint-disable @next/next/no-img-element */
export interface ExploreCardProps {
  image: string;
  name: string;
}

const ExploreCard = ({ image, name }: ExploreCardProps): JSX.Element => {
  return (
    <div>
      <div className="max-w-xs max-h-auto shadow-md flex flex-col bg-slate-50">
        <div className="overflow-hidden">
          <img
            className="object-cover"
            src="http://placekitten.com/g/320/300"
            alt="image"
          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-bold tracking-tight">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
