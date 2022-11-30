interface IItemCard {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ItemCard = ({
  image,
  name,
  description,
  price,
}: IItemCard): JSX.Element => {
  return (
    <div className="bg-beige max-w-xs">
      <div className="pb-2 ">
        <img src="http://placekitten.com/g/400/400"></img>
      </div>
      <div className="">
        <div className=" font-bold">name</div>
        <div className="">description</div>
        <div>price</div>
        <div>shoe colors</div>
        <div className="">
          <div className="font-bold">Quick Add</div>
          <div>sizes</div>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
