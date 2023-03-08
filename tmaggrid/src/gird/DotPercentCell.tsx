import { ICellRendererParams } from 'ag-grid-community';
import orangeDot from "../assets/orange-filled-circle-16.png";
import "./styles.css";

import CSS from 'csstype';
const sstyle: CSS.Properties = {
  float: "right",
}
  
export default (props: ICellRendererParams) => {
  const v = props.value ?? 0;
  let color = "blue";
  if (v < 50) color = "orange";
  else
  if (v < 75) color = "green";
  color = "orange";
  const src = `../assets/${color}`;
  return (
    <span style={sstyle}>
      <div className="odin2-dot-percent">{props.value}</div>
    </span>
  );
};
