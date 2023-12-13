import React, { useEffect } from "react";
import FirstSection from "../components/Home/FirstSection";
import Stat from "../components/Home/Stat";
import HowItWorks from "../components/Home/howItworks/HowItWorks";
import EarnMony from "../components/Home/EarnMony";
import Features from "../components/Home/Feature/Features";
import WhatareSaying from "../components/Home/WhatareSaying";
import Questions from "../components/Home/Frequency/questions";
import { useDispatch } from "react-redux";
import { increaseSites } from "../store/ui";

let init = true;
const Home = () => {
     const dispatch = useDispatch();
     useEffect(() => {
          if (init) {
               init = false;
               dispatch(increaseSites());
          }
     }, []);

     return (
          <div>
               <div>
                    <FirstSection />
               </div>
               <div>
                    <Stat />
               </div>
               <div>
                    <HowItWorks />
               </div>
               <div>
                    <EarnMony />
               </div>
               <div>
                    <Features />
               </div>
               <div>
                    <WhatareSaying />
               </div>
               <div>
                    <Questions />
               </div>
          </div>
     );
};

export default Home;
