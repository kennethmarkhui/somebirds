import Button from "./Button";
import Input from "./Input";

const SignUpModule = (): JSX.Element => {
  return (
    <section className="bg-beige w-full text-center">
      <div className="max-w-4xl mx-auto p-12">
        <div className="space-y-6 mb-12">
          <h2 className="font-bold text-2xl md:text-4xl">Want First Dibs?</h2>
          <p>
            Join our email list and be the first to know about new limited
            edition products, material innovations, and lots of other fun
            updates.
          </p>
        </div>

        <form className="md:flex md:gap-4 space-y-2 md:space-y-0 mb-6">
          <div className="w-full md:w-2/3">
            <Input placeholder="Enter Your Email Address" />
          </div>
          <Button className="w-full md:w-1/3 text-sm" type="submit">
            SIGN UP
          </Button>
        </form>

        <div className="text-sm text-gray-600">
          Note: You can opt-out at any time. See our&nbsp;
          <span className="font-semibold underline">Privacy Policy</span>&nbsp;
          and&nbsp;
          <span className="font-semibold underline">Terms</span>.
        </div>
      </div>
    </section>
  );
};
export default SignUpModule;
