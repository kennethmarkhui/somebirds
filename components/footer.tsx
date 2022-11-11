import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const help_array = [
  "1-888-963-8944",
  "1-888-963-8944(text)",
  "help@somebirds.com",
  "Returns/Exchanges",
  "FAQ/Contact Us",
  "Afterpay",
];

const shop_array = [
  "Men's Shoes",
  "Women's Shoes",
  "Men's Apparel",
  "Women's Apparel",
  "Socks",
  "Gift Cards",
  "Refer a Friend",
  "Download The Somebirds App",
];

const company_array = [
  "Our Stores",
  "Our Story",
  "Our Materials",
  "Sustainability",
  "Investors",
  "Partnership",
  "Product Testing",
  "Affiliates",
  "Bulk Orders",
  "Careers",
  "Press",
  "Wano Transparency Act",
  "Community Offers",
];

const Footer = () => {
  return (
    <footer className="bg-[#212a2f] text-white py-16 ">
      <div className="max-w-[60%] mx-auto">
        <div className="flex flex-row gap-4 m-4">
          <div className="basis-1/3">
            <div className="py-2 font-bold">HELP</div>
            {help_array.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div className="basis-1/3">
            <div className="py-2 font-bold">SHOP</div>
            {shop_array.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>

          <div className="basis-1/3">
            <div className="py-2 font-bold">COMPANY</div>
            {company_array.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 m-4">
          <div className="basis-1/3">
            <div className="py-4 font-bold">FOLLOW THE FLOCK</div>
            <div className="py-4 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              ipsa! Tempore laboriosam obcaecati aliquam deserunt repellendus
              itaque maxime facilis nam.
            </div>
            <div className="flex">
              <FaInstagram size={"2rem"} className="mr-2" />
              <FaTwitter size={"2rem"} className="mx-2" />
              <FaFacebook size={"2rem"} className="mx-2" />
              <FaPinterestP size={"2rem"} className="mx-2" />
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">Certified</div>
          <div className="basis-1/3">Flags</div>
        </div>
        <div className="flex place-content-center py-8">
          2022 SOMEBIRDS, Inc. All Rights Reserved.
          <span className="underline px-1">Terms,</span>
          <span className="underline px-1">Privacy</span> &
          <span className="underline px-1">Accesibility</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
