import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const locales = ["au", "ca", "cn", "nz", "uk", "us", "jp", "kr"];

const helpLinks = [
  "1-888-963-8944",
  "1-888-963-8944(text)",
  "help@somebirds.com",
  "Returns/Exchanges",
  "FAQ/Contact Us",
  "Afterpay",
];

const shopLinks = [
  "Men's Shoes",
  "Women's Shoes",
  "Men's Apparel",
  "Women's Apparel",
  "Socks",
  "Gift Cards",
  "Refer a Friend",
  "Download The Somebirds App",
];

const companyLinks = [
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
    <footer className="bg-[#212a2f] text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row text-center lg:text-left gap-4">
          <div className="basis-1/4">
            <h3 className="py-2 font-bold">HELP</h3>
            {helpLinks.map((item, index) => (
              <p key={index} className="text-xs mb-2">
                {item}
              </p>
            ))}
          </div>
          <div className="basis-1/4">
            <h3 className="py-2 font-bold">SHOP</h3>
            {shopLinks.map((item, index) => (
              <p key={index} className="text-xs mb-2">
                {item}
              </p>
            ))}
          </div>

          <div className="basis-2/4">
            <h3 className="py-2 font-bold">COMPANY</h3>
            {companyLinks.map((item, index) => (
              <p key={index} className="text-xs mb-2">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row text-center lg:text-left items-center gap-8">
          <div className="basis-1/4">
            <h3 className="mb-4 font-bold">FOLLOW THE FLOCK</h3>
            <p className="mb-4 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              ipsa! Tempore laboriosam obcaecati aliquam deserunt repellendus
              itaque maxime facilis nam.
            </p>
            <div className="flex gap-4 lg:justify-start justify-center">
              <FaInstagram size={"1rem"} />
              <FaTwitter size={"1rem"} />
              <FaFacebook size={"1rem"} />
              <FaPinterestP size={"1rem"} />
            </div>
          </div>
          <div className="basis-1/4 text-center">Certified</div>
          <div className="basis-2/4">
            <ul className="flex gap-4">
              {locales.map((locale) => (
                <li key={locale}>
                  <Image
                    src={`/icons/flag-${locale}.svg`}
                    alt={locale}
                    width={40}
                    height={25}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-xs py-8">
          2022 SOMEBIRDS, Inc. All Rights Reserved.
          <span className="underline px-1">Terms,</span>
          <span className="underline px-1">Privacy</span> &
          <span className="underline px-1">Accesibility</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
