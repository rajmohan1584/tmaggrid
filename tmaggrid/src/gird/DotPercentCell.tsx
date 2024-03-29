import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";

import CSS from 'csstype';
const sstyle: CSS.Properties = {
  float: "right",
}

const DotPercentCell = (props: ICellRendererParams) => {
  const v = props.value ?? 0;
  let color = "red";
  if (v < 25) color = "orange";
  else
  if (v < 50) color = "green";
  else
  if (v < 50) color = "blue";

  return (
    <span style={sstyle}>
      <div className={`odin2-dot-percent-${color}`}>{props.value} %</div>
    </span>
  );
};

export default DotPercentCell;
