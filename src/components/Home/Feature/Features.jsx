import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import classes from "./feature.module.css";
import FeatureIndiv from "./FeatureIndiv";

const featureList = [
     {
          title: "FEATURED ADMIN PANEL WITH DETAILED STATS",
          step1: " Control all of the features from the administration panel with a click of a button.",
          step2: ` Know your audience Analyse in detail what brings
    you the most income and
    what strategies you should
    adapt.`,
          fontColor: "#0085FF",
          BGColor: "#F2FCFC",
     },
     {
          title: "LOW MINIMUM PAYOUT & HIGH CPM RATES",
          step1: ` You are required to earn only $5 minimum threshold
          before you will be paid. We
          can pay all users via their
          prefered payment method.`,
          step2: `Make the most out of your traffic with our always
          increasing rates.`,
          fontColor: "white",
          BGColor: "#8F8CFF",
     },
     {
          title: "API & SUPPORT",
          step1: `Shorten links more quickly with easy to use API and
          bring your creative and
          advanced ideas.`,
          step2: ` A dedicated support team is ready to help with any
          questions you may have`,
          fontColor: "#FA1CFF",
          BGColor: "#FFF3F9",
     },
];
const Features = () => {
     return (
          <div className="mb-5">
               <div className="text-center">
                    <FontAwesomeIcon
                         icon={faDiamond}
                         style={{ color: "#2E3D62" }}
                    />
                    <h6 className="mt-2">
                         Here's the peak of VIP Link features
                    </h6>
                    <h1 className={classes.titleFont}>Our Features List</h1>
               </div>

               <div className="mt-5 d-flex flex-wrap justify-content-center gap-5">
                    <FeatureIndiv content={featureList[0]} />
                    <FeatureIndiv content={featureList[1]} />
                    <FeatureIndiv content={featureList[2]} />
               </div>
          </div>
     );
};

export default Features;
