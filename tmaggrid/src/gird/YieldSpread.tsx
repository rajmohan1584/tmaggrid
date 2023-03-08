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
  marginLeft: "-32px"
}

export const YieldSpreadCell = (props: ICellRendererParams) => {
  const v = (props.getValue) ? props.getValue() : 'xx';
  console.log(v);
  let p = '--', q = '--';
  if (Array.isArray(v)) {
    if (v.length > 0) {
      if (v[0]) p = v[0].toFixed(3);
    }
    if (v.length > 1) {
      if (v[1]) q = v[1].toFixed(3);
    }
  }
  return (
    <>
      <div style={pstyle}>{p}</div>
      <div style={qstyle}>{q}</div>
    </>
  );
};

export const YieldSpreadHeader = (props: IHeaderParams) => {
  return (
    <>
      <div style={phstyle}>{"Yield"}</div>
      <div style={qhstyle}>{"Spread"}</div>
    </>
  );
};
