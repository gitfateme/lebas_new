import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Header.scss";
import MyCarousel from "./MyCarousel";
import carouselImg1 from "./images/carousel-11.jpg";
import carouselImg2 from "./images/carousel-22.jpg";
import carouselImg3 from "./images/carousel-33.jpg";
import MobileNav from "./MobileNav";
import MyNav from "./MyNav";
import { Link } from "react-router-dom";

function Header() {
  let carouselImages = [carouselImg1, carouselImg2, carouselImg3];
  return (
    <div className="Header row">
      <div className="colored-top-bar">
        <h1 className="text-center pt-3">
          <Link to="/" style={{ textDecoration: "none", color: "#45424e" }}>
            فروشگاه لباس مینو
          </Link>
        </h1>
        <MyNav />
        <MobileNav />
        <MyCarousel infiniteLoop={true}>
          {carouselImages.map((img, index) => {
            return <img src={img} key={index} alt="Carousel" />;
          })}
        </MyCarousel>
      </div>
    </div>
  );
}

export default Header;
