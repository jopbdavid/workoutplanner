import React from "react";
import { Link } from "react-router-dom";

// import hero1 from "../assets/hero1.webp";
// import hero2 from "../assets/hero2.webp";
// import hero3 from "../assets/hero3.webp";
// import hero4 from "../assets/hero4.webp";

// const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          Supercharge Your Fitness Journey with Our Workout Planner
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Welcome to the ultimate destination for achieving your fitness goals!
          Whether you're a seasoned gym-goer looking to optimize your routine or
          a newbie eager to kickstart your fitness journey, ironCycles is here
          to empower you. Get ready to transform your body, boost your
          confidence, and unleash your full potential.
        </p>
        <div className="mt-10 ">
          <Link to="Planner" className="btn btn-primary ">
            Our Planner
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {/* {carouselImages.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Hero;
