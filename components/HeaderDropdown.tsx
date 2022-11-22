import Button from "./Button";
import ButtonImage from "./ButtonImage";
const Shoes = [
  "Everyday Sneakers",
  "Running Shoes",
  "Slip-Ons",
  "Water-Repellent Sneakers",
  "Hiking Shoes",
  "High Tops",
  "Slippers",
  "Sale",
  "Shop all",
];
const ShopByActivity = [
  "Everyday",
  "Hiking",
  "Running",
  "Lounging",
  "Shop all",
];
const ApparelnMore = [
  "Tees",
  "Underwear",
  "Socks",
  "Sweatshirts & Sweatpants",
  "Hats & Scarves",
  "Insoles",
  "Sales",
  "Gift Cards",
];

const HeaderDropdown = () => {
  return (
    <div className="bg-red-200 w-full ">
      <div className="max-w-screen-xl pt-16 pb-4 mx-auto">
        <div className="flex flex-row justify-center">
          <div className="basis-1/5">
            <h3 className="py-4 font-bold text-xl hover:underline cursor-pointer">
              SHOES
            </h3>
            {Shoes.map((item, index) => (
              <p
                key={index}
                className="text-s mb-2 hover:underline cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="basis-1/5">
            <h3 className="py-4 font-bold text-xl hover:underline cursor-pointer">
              SHOP BY ACTIVITY
            </h3>
            {ShopByActivity.map((item, index) => (
              <p
                key={index}
                className="text-s mb-2 hover:underline cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="basis-1/5">
            <h3 className="py-4 font-bold text-xl hover:underline cursor-pointer">
              APPAREL & MORE
            </h3>
            {ApparelnMore.map((item, index) => (
              <p
                key={index}
                className="text-s mb-2 hover:underline cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="basis-2/5">
            <h3 className="py-4 font-bold text-xl ">FEATURED</h3>
            <div className="flex flex-col gap-4">
              <ButtonImage variant="hero">THE FLUFF COLLECTION</ButtonImage>
              <ButtonImage variant="banana">MENS SALE</ButtonImage>
              {/* 
              <ButtonImage variant="space">SPACE</ButtonImage>
              <ButtonImage variant="jungle">JUNGLE</ButtonImage>
              <ButtonImage>CAR</ButtonImage>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderDropdown;
