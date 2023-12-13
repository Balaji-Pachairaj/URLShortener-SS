import React from "react";
import classes from "./How.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import LinkBar from "./LinkBar";

const content = [
     {
          title: "CREATE AN ACCOUNT",
          font: "faUserPlus",
          text: "In order to get started with KPS Link, at first all you need is KPS Link Account & you can create it by sign-up option.",
          fontColor: "#0085FF",
          count : 1
        },
     {
          title: "SHORTHEN YOUR LINKS & SHARE",
          font: "faLink",
          text: "Shorten that links with KPS Link & copy them and start sharing on any platform e.g: YouTube, Telegram, Website etc.",
          fontColor: "#9364D4",
          count : 2
     },
     {
          title: "EARN MONEY",
          font: "faDollarSign",
          text : "Here you Go, since you've shared your Shorten links and got views on it, So that you're getting paid for every view you get.check our CPM rates at Payout Rates Page.",
          fontColor: "#4DC1BD",
          count : 3
     },
];

const HowItWorks = () => {
     return (
          <div className={classes.howitWorks}>
               <div className="text-center">
                    <h2 className="fw-bolder">How It Works </h2>
                    <FontAwesomeIcon
                         icon={faDiamond}
                         style={{ color: "#FF8257" }}
                    />
                    <p className="m-0">
                         VIP Link is a completely free tool to create shorthen
                         links
                    </p>
                    <p className="m-0">navigate your users</p>
               </div>

               <div className="mt-5  d-flex flex-wrap justify-content-center gap-4 ">
                    <LinkBar content={content[0]} />
                    <LinkBar content={content[1]} />
                    <LinkBar content={content[2]} />
               </div>
          </div>
     );
};

export default HowItWorks;
