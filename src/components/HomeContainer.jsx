import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { motion } from "framer-motion";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="py-1 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-red-100 px-4 py-1 rounded-full">
          <p className="text-base text-red-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          
          <span className="text-red-600 text-[2.5rem] lg:text-[4rem]">
            HUNGRY?
          </span>
          {' '}
           Just wait food at
           {' '}
           <span className="text-red-600 text-[2.5rem] lg:text-[3.5rem]">your door</span>
            
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            For us, it's not just about bringing you good food from your favourite restaurants. 
            It's about making a connection, which is why we sit down with the chefs, 
            dreaming up menus that will arrive fresh and full of flavour. Try us!


        </p>

        <button
          type="button"
          className="bg-gradient-to-br text-white from-red-500 to-red-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-3 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-30  py-4 gap-5 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
               
                key={n.id}
                className="lg:w-100  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <motion.img
                   whileHover={{ scale: 1.2 }} 
                  src={n.imageSrc}
                 
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;