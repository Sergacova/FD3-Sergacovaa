import React, { useEffect, useRef } from "react";

const WithRef = () => {
   // const inputEl = useRef (null);
    // console.log(inputEl);
    const numRef = useRef(0);

   const handleClick = () => {
       numRef.current =1;
    }


    useEffect(() => {
        // console.log(inputEl);
        console.log(numRef.current);

    });
    return (
        <div>
           {/* < input placeholder="name" /> */}
           <button onClick={(onClick) => numRef.current}>{numRef.current}</button>
        </div>
    );
};

export default WithRef;