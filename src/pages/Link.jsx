import { onValue, ref } from "firebase/database";
import React from "react";

import { useParams } from "react-router-dom";
import { db } from "../firebase";
import TopAds from "../components/ads/TopAds";
import ContentAds from "../components/ads/ContentAds";

const Link = () => {
     const p = useParams().linkId;

     // onValue(ref(db, "/links/" + p), (snapshot) => {
     //      const data = snapshot.val();

     //      console.log(data);

     //      window.location.replace(data.link);
     // });
     return (
          <div>
               <div>
                    <TopAds linkId = {p} />
               </div>
               <div>
                    <ContentAds />
               </div>
               <div>
                    <hr />
               </div>
               <div>
                    <hr />
               </div>
          </div>
     );
};

export default Link;
