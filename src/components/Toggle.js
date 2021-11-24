import React, {useState} from "react";
//create state for toggling on / off
function Toggle() {
  const [isToggle, setToggle] = useState(false)
  const color = isToggle?"red":"white";
  return <button style={{background: color}} onClick={()=>setToggle(!isToggle)}>{isToggle?"on":"off"}</button>;
}

export default Toggle;
