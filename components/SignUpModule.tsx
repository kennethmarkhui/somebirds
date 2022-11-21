import Button from "./Button";
import Form from "./Form";

const SignUpModule = () => {
  return (
    <section className="bg-beige w-full">
      <div className="flex flex-col items-center">
        <div className="font-bold text-4xl p-8">Want First Dibs?</div>
        <div className="p-4 text-lg">
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </div>
        <div className="flex p-4 space-x-6">
          <Form placeholder="Enter Your Email Address"></Form>
          <Button>SIGN UP</Button>
        </div>

        <div className="pb-8 text-sm">
          Note: You can opt-out at any time. See our{" "}
          <span className="font-semibold underline">Privacy Policy</span> and{" "}
          <span className="font-semibold underline">Terms</span>.
        </div>
      </div>
    </section>
  );
};
export default SignUpModule;
