import Footer from "../components/footer";
import Caroussel_card from "../components/caroussel-card";
import Button from "../components/button";
import Hero from "../components/Hero";
import Form from "../components/form";

export default function Home() {
  return (
    <div>
      <Hero />
      <Button>Shop Little Kids</Button>
      <Button variant="fill">Shop Big Kids</Button>
      <Caroussel_card
        image="yes"
        name="Cold Weather Run"
        description="water-repellant running shoes so you can clock miles rain or shine or both"
      />
      homepage
      <Form placeholder="Enter your email address"></Form>
      <Footer />
    </div>
  );
}
