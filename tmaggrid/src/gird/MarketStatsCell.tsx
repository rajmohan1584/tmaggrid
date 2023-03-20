import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";

import CSS from 'csstype';

const sstyle: CSS.Properties = {
  float: "right",
}

const MarketStatsCell = (props: ICellRendererParams) => {
  const v = props.value;

  if (v === null) return null;
  const iv = v.toFixed(0);
  var ivf = iv.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <span style={sstyle}>
      <div>{ivf}</div>
    </span>
  );
};

export default MarketStatsCell;
