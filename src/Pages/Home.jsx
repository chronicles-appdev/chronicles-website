import ClientReview from "../Components/ClientReview";
import Clients from "../Components/Clients";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import OurProducts from "../Components/OurProducts";
import StatsCount from "../Components/StatsCount";
import WhatWeDo from "../Components/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsCount />
      <WhatWeDo />
      <OurProducts />
      <Clients />
      <ClientReview />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
