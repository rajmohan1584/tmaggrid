import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";

const ComparitiveAnalysisQuartileCell = (props: ICellRendererParams) => {
  const v = props.value;
  if (v === null || v === undefined) return "";

  let color = "brown";
  if (v>=4) color = "green";
  else
  if (v===0) color = "red";
  const className = `odin2-score-${color}`;

  return (
      <div className={className}>{v}</div>
  );
};

export default ComparitiveAnalysisQuartileCell;