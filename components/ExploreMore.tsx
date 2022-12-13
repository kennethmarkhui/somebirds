import ExploreCard from "./ExploreCard";
import ItemCard from "./ItemCard";

const ExploreMore = () => {
  return (
    <div className="bg-[#f5f5f5] w-full h-auto p-16">
      <div className="flex flex-row justify-center">
        <div className="p-16">
          <p className="text-3xl font-bold">Explore More</p>
          <p className="text-3xl font-bold ">Mens Shoes</p>
        </div>
        <div className="p-10 grid grid-cols-2 gap-4">
          <ExploreCard name="Everyday Sneakers" image="yes" />
          <ExploreCard name="Everyday Sneakers" image="yes" />
          <ExploreCard name="Everyday Sneakers" image="yes" />
          <ExploreCard name="Everyday Sneakers" image="yes" />
        </div>
      </div>
    </div>
  );
};
export default ExploreMore;
