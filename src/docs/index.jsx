import React from "react";
import { render } from "react-dom";
// import Rbox1 from "../../lib";
import Ggot from "../../lib/Ggot";
import Rbox2 from '../../lib/Rbox2'
import Rbox1 from '../../lib/Rbox1'
import "./styles.css";

function APP() {
  return (
    <div>
      <Rbox2/>
      <Rbox1 style={{height:'220px'}}>gggggggg</Rbox1>
    </div>
  );
}

render(<APP />, document.getElementById("app"));
