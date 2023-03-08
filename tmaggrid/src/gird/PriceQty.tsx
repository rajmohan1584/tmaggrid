import { ICellRendererParams } from 'ag-grid-community';
import { IHeaderParams } from 'ag-grid-community';

import CSS from 'csstype';
const pstyle: CSS.Properties = {
  marginTop: "-9px"
}
const qstyle: CSS.Properties = {
  marginTop: "-22px"
}

const phstyle: CSS.Properties = {
  marginTop: "-20px",
  marginLeft: "20px"
}
const qhstyle: CSS.Properties = {
  marginTop: "10px",
  marginLeft: "-16px"
}

export const PriceQtyCell = (props: ICellRendererParams) => {
  const v = (props.getValue) ? props.getValue() : 'xx';
  console.log(v);
  let p = '--', q = '--';
  if (Array.isArray(v)) {
    if (v.length > 0) p = v[0] ?? '--';
    if (v.length > 1) q = v[1] ?? '--';
  }
  return (
    <>
      <div style={pstyle}>{p}</div>
      <div style={qstyle}>{q}</div>
    </>
  );
};

export const PriceQtyHeader = (props: IHeaderParams) => {
  return (
    <>
      <div style={phstyle}>{"Price"}</div>
      <div style={qhstyle}>{"Qty"}</div>
    </>
  );
};
