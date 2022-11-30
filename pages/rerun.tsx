/* eslint-disable @next/next/no-img-element */
import Button from "../components/Button";

const Rerun = (): JSX.Element => {
  return (
    <div className="flex flex-row bg-beige py-8 place-content-center">
      <div className="flex p-12">
        <img src="https://placekitten.com/g/600/800" alt="image" />
      </div>
      <div className="flex">
        <div className="flex-col my-auto max-w-2xl">
          <div className="font-bold py-4 text-4xl">SOMEBIRDS RERUN</div>
          <div className="font-bold py-4 text-3xl">
            A New Way To Get Old Favorites
          </div>
          <div className="py-4 text-lg">
            Allbirds ReRun is our new marketplace where you can shop slightly
            imperfect and gently used products, extending their life and
            lowering our impact on the planet.
          </div>
          <div className="py-4 text-lg">
            A quick heads up: By visiting Allbirds ReRun, you will be leaving
            allbirds.com and heading to a site owned and operated by Trove, our
            third party partner. Trove manages all things ReRun, including your
            order confirmation, shipping, potential returns/exchanges, and the
            like.
          </div>
          <div>
            <Button>START SHOPPING RERUN</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rerun;
