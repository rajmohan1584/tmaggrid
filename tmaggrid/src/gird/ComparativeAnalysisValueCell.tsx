import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";

import CSS from 'csstype';

const sstyle: CSS.Properties = {
  textAlign: 'right',
}
  
export default (props: ICellRendererParams) => {
  const v = props.value;
  let sv = v;
  if (typeof v === "number") {
    sv = v.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <span style={sstyle}>
      <div>${sv}</div>
    </span>
  );
};
