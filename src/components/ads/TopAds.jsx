import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { increaseCountForLinkId, increaseTotalClick } from "../../store/ui";


const TopAds = ({ linkId }) => {
     const [second, setSecond] = useState(false);
     const [dataCount, setDataCount] = useState(0);
     const dispatch = useDispatch();
     useEffect(() => {
          console.log("dfasfas");

          setTimeout(() => {
               setSecond(true);
          }, 15000);

          let data1;
          onValue(ref(db, "/links/" + linkId), (snapshot) => {
               data1 = snapshot.val();
               console.log(data1)
               setDataCount(data1.count);
          });
     }, []);

     const navigateHandler = () => {
          dispatch(increaseTotalClick());
          dispatch(increaseCountForLinkId(linkId , dataCount));
            onValue(ref(db, "/links/" + linkId), (snapshot) => {
                 const data = snapshot.val();

                 console.log(data);

                 window.location.replace(data.link);
            });
     };

     return (
          <div>
               <div></div>
               <div className="d-flex justify-content-center mt-4">
                    {!second && (
                         <Button variant="dark" disabled>
                              Please wait 15 seconds
                         </Button>
                    )}
                    {second && (
                         <Button onClick={navigateHandler}>
                              Click this to navigate to link
                         </Button>
                    )}
               </div>
          </div>
     );
};

export default TopAds;
