import Button from "../components/Button";
const Rerun = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="basis-1/2">
          <img src="http://placekitten.com/g/700/900"></img>
        </div>
        <div className=" flex flex-col basis-1/2 mx-28 justify-start">
          <div className="font-bold">SOMEBIRDS RERUN</div>
          <div>A New Way To Get Old Favorites</div>
          <div>
            Allbirds ReRun is our new marketplace where you can shop slightly
            imperfect and gently used products, extending their life and
            lowering our impact on the planet.
          </div>
          <div>
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
    </>
  );
};

export default Rerun;
