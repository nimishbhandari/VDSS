import React from "react";
import "./About.scss";
import {
  BuildingIcon,
  DevelopSvg,
  LaptopIcon,
  PhoneIcon,
  PortfolioSvg,
  SmileIcon,
} from "../Icons";
function About() {
  return (
    <div className="About_wrapper">
      <p className="About_heading">About Us</p>
      <div className="About_outer">
        <div className="About_left">
          <p className="p_left">
            We kno that digital presence is going to be increasingly important
            post-pandemic. Pandemic has changed the behavior of the common
            consumer.
          </p>
          <p className="p_left">
            A consumer, whether he is a car owner, willing to go to a garage for
            regular service, or a shopper doing online searches, would like to
            explore the online presence of such businesses and their offerings
            before he or she would physically be visiting the place. We have
            seen that despite so many services available today which claim to
            digitize business, most of the small business owners are finding it
            very difficult to make them online.{" "}
          </p>
          <p className="p_left">
            Such difficulties are coming from their lack of understanding on to
            what extent they should invest before they see value is coming from
            this investment.
          </p>
        </div>
        <div className="About_right">
          <div className="About_right_img">
            <DevelopSvg />
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="portfolio__left">
          <div className="img">
            <PortfolioSvg />
          </div>
        </div>
        <div className="portfolio__right">
          <span className="portfolio__right__element">
            <SmileIcon />
            <div className="ele__left">
              <h2>2+</h2>
              <p>Happy Clients</p>
            </div>
          </span>
          <span className="portfolio__right__element">
            <LaptopIcon />
            <div className="ele__left">
              <h2>1</h2>
              <p>Project Delivered</p>
            </div>
          </span>
          <span className="portfolio__right__element">
            <BuildingIcon />
            <div className="ele__left">
              <h2>1</h2>
              <p>Successful Year</p>
            </div>
          </span>
          <span className="portfolio__right__element">
            <PhoneIcon />
            <div className="ele__left">
              <h2>24*7</h2>
              <p>Support</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
