import { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState({ type: "hex", hexcolor: "#000000", rgb: "rgb(0,2,1)" });

  function hexrandomcolor(length) {// in this function the random color of hex is set
    const r = rgbrandomcolor(256);
    return Math.floor(Math.random() * length);
  }

  const Hexcolors = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";

    for (let index = 0; index < 6; index++) {
      hexcolor += hex[hexrandomcolor(hex.length)];
    }

    setColor((prev) => ({ ...prev, type: "hex", hexcolor: hexcolor }));
  };

  function rgbrandomcolor(length) {// in this function the random color of rgb is set
    const r = rgbrandomcolor(256);
    return Math.floor(Math.random() * length);
  }

  const rgbcolor = () => { 
    const b = rgbrandomcolor(256);
    const g = rgbrandomcolor(256);

    const rgbcolors = `rgb(${r},${b},${g})`;

    setColor((prev) => ({ ...prev, type: "rgb", rgb: rgbcolors }));
  };



const conditional= ()=> { // this function check type of color and then outputs accordingly
  return color.type==='rgb'?
<>
<h3>"RGB Color"</h3>
<h3>{color.rgb}</h3></>
:<>
<h3>"HEX Color"</h3>
<h3>{color.hexcolor}</h3>

</>

}


  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color.type === "hex" ? color.hexcolor : color.rgb,
      }}
    >
      <button onClick={Hexcolors}>Create HEX Color</button>
      <button onClick={rgbcolor}>Create RGB Color</button>
      <button onClick={() => (color.type === "hex" ? Hexcolors() : rgbcolor())}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
      {conditional()}
  
      </div>
    </div>
  );
}
