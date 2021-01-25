import React, { useState, useEffect } from "react";
import { getColors } from "../utils/getColors";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    getColors()
    .then((res) => {
      const colors = res.data;
      setColorList(colors);
    })
    .catch((err) => {
      console.log("something went wrong", err.Error)
    })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
