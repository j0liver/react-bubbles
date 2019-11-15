import React, { useState, useEffect } from "react";
import axiosWithAuth from "../components/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(res => 
        
        setColorList(res.data)
      )
      .catch(err => console.log(err.response));
  }, []);

  return (
    <>
      <h1>bubbles page</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
