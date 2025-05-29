import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Services from "../components/Services";
import EcomCard from "../components/EcomCard";
import TechDriven from "../components/TechDriven";
import Banner1 from "../components/Banner1";
import OurProcess from "../components/OurProcess";
import Discover from "../components/Discover";
import FeaturedClients from "../components/FeaturedClients";
import Testimonials from "../components/Testimonials";
import Contactus from "../components/Contactus";

const Home = () => {
  return (
    <div className="mb-4">
      <Hero />
      <Container />
      <Services />
      <EcomCard />
      <TechDriven />
      <Banner1 />
      <OurProcess />
      <Discover />
      <FeaturedClients />
      <Testimonials />
      <Contactus />
    </div>
  );
};

export default Home;
