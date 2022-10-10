import { useEffect } from "react";
import Hero from "../components/Hero.js";
import Opening from "../components/Opening.js";
import Projects from "../components/Projects.js";
import Argument from "../components/Argument.js";
import Appointment from "../components/Appointment.js";
import Process from "../components/Process.js";
import Testimonials from "../components/Testimonials.js";
import FAQ from "../components/FAQ.js";
import Footer from "../components/Footer.js";
import "../assets/fonts/AlfaSlabOne-Regular.ttf";
import ReactGA from "react-ga";

export default function Landing() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Hero />

      <Opening />

      <Projects />

      <Argument />

      <Process />

      <Testimonials />

      <Appointment />

      <FAQ />

      <Footer />
    </>
  );
}
