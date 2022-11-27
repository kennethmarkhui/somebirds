interface IQuestion {
  question: string;
  answer: string;
}

interface IFAQ {
  title: string;
  questions: IQuestion[];
}

const contact = [
  "Send us a text: 0-123-456-7890",
  "Give us a call: 0-123-456-7891",
  "Monday - Wednesday 5AM - 3:30PM PST",
  "Thursday - CLOSED",
  "Friday - 5am - 5pm PST",
  "Saturday - Sunday 5AM - 5PM PST",
];

const faqs: IFAQ[] = [
  {
    title: "PRODUCT & FIT",
    questions: [
      { question: "Do Somebirds run true to size?", answer: "" },
      {
        question: "Will my shoes stretch?",
        answer: "",
      },
      {
        question: "Are Somebirds good for flat feet?",
        answer: "",
      },
      {
        question: "Are Somebirds waterproof?",
        answer: "",
      },
      {
        question: "Can you wash Somebirds insole?",
        answer: "",
      },
      {
        question: "Are Somebirds washable?",
        answer: "",
      },
    ],
  },
  {
    title: "RETURNS & EXCHANGE",
    questions: [
      {
        question: "Can I return or exchange an instore purchase online?",
        answer: "",
      },
      { question: "How do I make a gift exchange?", answer: "" },
      { question: "What is Somebirds' return policy?", answer: "" },
    ],
  },
  {
    title: "ORDERS, SHIPPING & TRACKING",
    questions: [
      {
        question: "Do you offer gift wrap?",
        answer: "",
      },
      {
        question: "How are you keeping distribution centers safe?",
        answer: "",
      },
      { question: "Can I expedite my order?", answer: "" },
      { question: "How do you ship?", answer: "" },
      { question: "What if I want to cancel or change my order?", answer: "" },
    ],
  },
  {
    title: "PAYMENTS & REFUNDS",
    questions: [
      { question: "When can I expect my refund?", answer: "" },
      {
        question: "Does Somebirds offer discount codes or coupons?",
        answer: "",
      },
      { question: "How do I send a gift card?", answer: "" },
    ],
  },
  {
    title: "COMPANY",
    questions: [
      { question: "What is your commitment to sustainability?", answer: "" },
      { question: "Where are Somebirds products made?", answer: "" },
      {
        question:
          "How do you ensure fair and safe working conditions at factories?",
        answer: "",
      },
      {
        question: "Any updates with the Somebirds and adidas collaboration?",
        answer: "",
      },
    ],
  },
];

const Help = () => {
  return (
    <>
      <section className="flex flex-col bg-[#212a2f] text-white h-[55vh]">
        <div className="m-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">How Can We Help?</h1>
          <div>
            {contact.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="max-w-[80vw] mx-auto flex flex-grow justify-center">
          <div className="flex flex-col flex-auto gap-12">
            <h2 className="font-bold text-2xl md:text-3xl text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-wrap">
              {faqs.map(({ title, questions }) => (
                <div
                  key={title}
                  className="basis-full md:basis-1/2 flex-auto space-y-4 px-4 pb-10"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <ul className="space-y-4">
                    {questions.map(({ question, answer }) => (
                      <li
                        key={question}
                        className="hover:underline cursor-pointer"
                      >
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Help;
