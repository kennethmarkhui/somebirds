const contact = [
  "Send us a text: 1-814-251-9966",
  "Give us a call: 1-888-963-8944",
  "Monday - Wednesday 5AM - 3:30PM PST",
  "Thursday - CLOSED",
  "Friday - 5am - 5pm PST",
  "Saturday - Sunday 5AM - 5PM PST",
];

const Product = [
  "Do Somebirds run true to size?",
  "Will my shoes stretch?",
  "Are Somebirds good for flat feet?",
  "Are Somebirds waterproof?",
  "Can you wash Somebirds insole?",
  "Are Somebirds washable?",
];
const Orders = [
  "Do you offer gift wrap?",
  "How are you keeping distribution centers safe?",
  "Can I expedite my order?",
  "How do you ship?",
  "What if I want to cancel or change my order?",
];
const Company = [
  "What is your commitment to sustainability?",
  "Where are Somebirds products made?",
  "How do you ensure fair and safe working conditions at factories?",
  "Any updates with the Somebirds and adidas collaboration?",
];
const Return = [
  "Can I return or exchange an instore purchase online?",
  "How do I make a gift exchange?",
  "What is Somebirds' return policy?",
];
const Payment = [
  "When can I expect my refund?",
  "Does Somebirds offer discount codes or coupons?",
  "How do I send a gift card?",
];

const help = () => {
  return (
    <div className="">
      <div className="flex flex-col m-auto bg-[#212a2f] text-white py-60">
        <h1 className="text-6xl p-8 mx-auto font-bold">How Can We Help?</h1>
        <div className="mx-auto ">
          {contact.map((item, index) => (
            <p key={index} className="text-center">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl py-10 text-center">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-semibold py-4">PRODUCT & FIT</div>
            <div>
              {" "}
              {Product.map((item, index) => (
                <p key={index} className="py-2 hover:underline cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            {" "}
            {/* RETURNS AND EXCHANGE */}
            <div className="font-semibold py-4">RETURNS & EXCHANGE</div>
            <div>
              {" "}
              {Return.map((item, index) => (
                <p key={index} className="py-2 hover:underline cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold py-4">
              ORDERS, SHIPPING & TRACKING
            </div>
            <div>
              {" "}
              {Orders.map((item, index) => (
                <p key={index} className="py-2 hover:underline cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            {" "}
            {/* PAYMENTS AND REFUNDS */}
            <div className="font-semibold py-4">PAYMENTS & REFUNDS</div>
            <div>
              {" "}
              {Payment.map((item, index) => (
                <p key={index} className="py-2 hover:underline cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold py-4">COMPANY</div>
            <div>
              {" "}
              {Company.map((item, index) => (
                <p key={index} className="py-2 hover:underline cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default help;
