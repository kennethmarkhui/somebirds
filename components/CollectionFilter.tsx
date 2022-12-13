import { Shoes } from "./Header";
const CollectionFilter = () => {
  return (
    <div className="p-16">
      <div>
        <h3 className="py-4 font-bold text-xl hover:underline cursor-pointer">
          Running Shoes
        </h3>
        {Shoes.map((item, index) => (
          <p key={index} className="text-s mb-2 hover:underline cursor-pointer">
            {item}
          </p>
        ))}
      </div>
      <h3 className="font-bold pt-4">Filter By:</h3>
      <h3 className="font-bold pt-4">BEST FOR</h3>
      <div className="">
        <input type="checkbox" value="" className="cursor-pointer"></input>
        <label> Running</label>
      </div>
      <div className="">
        <input type="checkbox" value="" className="cursor-pointer"></input>
        <label> Everyday</label>
      </div>
      <div className="">
        <input type="checkbox" value="" className="cursor-pointer"></input>
        <label> Wet Weather</label>
      </div>
      <div className="">
        <input type="checkbox" value="" className="cursor-pointer"></input>
        <label> Cool Weather</label>
      </div>
      <div className="">
        <input type="checkbox" value="" className="cursor-pointer"></input>
        <label> Warm Weather</label>
      </div>
      <h3 className="font-bold pt-4">MATERIAL</h3>
      <div className="">
        <input type="checkbox" value="" className="cursor-pointer "></input>
        <label> Light & Breezy Tree</label>
      </div>
      <div className="">
        <input type="checkbox" value="" className="cursor-pointer"></input>
        <label> Soft & Cozy Wool</label>
      </div>
      <h3 className="font-bold pt-4">HUE</h3>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-gray-700"
        ></input>
        <label> Grey</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-blue-900"
        ></input>
        <label> Blue</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-black"
        ></input>
        <label> Black</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-slate-200"
        ></input>
        <label> White</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-pink-400"
        ></input>
        <label> Pink</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-beige"
        ></input>
        <label> Beige</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-green-800"
        ></input>
        <label> Green</label>
      </div>
      <div className="">
        <input
          type="checkbox"
          value=""
          className="cursor-pointer accent-purple-700"
        ></input>
        <label> Purple</label>
      </div>
    </div>
  );
};
export default CollectionFilter;
