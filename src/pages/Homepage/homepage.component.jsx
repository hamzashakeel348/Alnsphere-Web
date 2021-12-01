import React, { useEffect, useState } from "react";
import CTA from "../../components/UI/CTA/cta.component";
import FAQ from "../../components/UI/FAQ/faq.component";
import Footer from "../../components/UI/Footer/footer.component";
import Hero from "../../components/UI/Hero/hero.component";
import Navbar from "../../components/UI/Navbar/navbar.component";
import Overview from "../../components/UI/Overview/overview.component";
import Play from "../../components/UI/Play Section/play.component";
import Roadmap from "../../components/UI/Roadmap/roadmap.component";
import ChoosenOnes from "../../components/UI/Section Choosen Ones/choosen.component";
import Team from "../../components/UI/Team/team.component";
import "./homepage.styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Homepage = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    for (let i = 0; i < 20; i++) {
      window.scrollTo(0, i);
    }
    let scrollToTop = setInterval(() => {
      window.scrollTo(0, 0);
      console.log("riningng");
    }, 200);

    let clearLoading = setInterval(() => {
      setLoad(false);
      clearInterval(scrollToTop);
      clearInterval(clearLoading);
    }, 2000);

    return () => {
      clearInterval(clearLoading, null);
    };
  });

  return (
    <div className="homepage">
      {load ? (
        <div id="loading">
          <div className="loading-mid">
            {/* <img src={Logo} /> */}
            <div className="loading-dots">
              {/* <p>Loading</p> */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : null}
      <Navbar />
      <Hero />
      <Overview />
      {/* <Gallery /> */}
      <Play />
      <ChoosenOnes />
      <Roadmap />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Homepage;
