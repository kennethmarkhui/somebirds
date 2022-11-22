import Button from "./Button";
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
            <h3 className="py-4 font-bold text-xl">SHOES</h3>
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
            <h3 className="py-4 font-bold text-xl">SHOP BY ACTIVITY</h3>
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
            <h3 className="py-4 font-bold text-xl">APPAREL & MORE</h3>
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
              <Button variant="image">THE FLUFF COLLECTION</Button>
              <Button variant="image">MENS SALE</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderDropdown;
