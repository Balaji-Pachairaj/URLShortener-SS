import React from "react";

import ListIndiv from "./ListIndiv";

import { useSelector } from "react-redux";

const linkObject = {
     title: "samplesamplesample",
     shorthenUrl: "http://localhost:3000/member",
     originURl: "https://firebase.google.com/",
     count: "1213",
};

const LinkList = () => {
     const linkarray = useSelector((state) => {
          return state.user.linksArray;
     });
     console.log(linkarray);
     return (
          <div className="w-100 mt-3 mb-5">
               <div className=" mb-4">
                    <h1 className=" fw-bolder text-center">Link Lists</h1>
               </div>
               <div className="d-flex flex-column-reverse">
                    {!linkarray.length && <h1 className="text-center">NO linked is created</h1>}
                    {linkarray.length &&
                         linkarray.map((link) => {
                              return <ListIndiv linkObj={link} key={link.shorthenLink} />;
                         })}
               </div>
          </div>
     );
};

export default LinkList;
