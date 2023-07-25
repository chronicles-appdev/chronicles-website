import AboutUs from "../Components/AboutUs";
import CoreValues from "../Components/CoreValues";
import NavbarWithShapeAbout from "../Components/NavbarWithShapeABout";
import OurPeople from "../Components/OurPeople";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <NavbarWithShapeAbout />
      <AboutUs />
      <CoreValues />
      <OurPeople />
      <Footer />
    </div>
  );
};

export default About;
