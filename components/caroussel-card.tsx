interface ICard {
  image: string;
  name: string;
  description: string;
}

const Caroussel_card = ({ image, name, description }: ICard): JSX.Element => {
  return (
    <div className="w-full h-[32rem] rounded-lg shadow-md bg-slate-50 lg:max-w-sm">
      <img
        className="object-cover w-full h-80"
        src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
        alt="image"
      />
      <div className="p-4">
        <h4 className="text-xl font-bold tracking-tight py-4">{name}</h4>
        <p className="mb-2 leading-normal">{description}</p>
      </div>
    </div>
  );
};
export default Caroussel_card;
