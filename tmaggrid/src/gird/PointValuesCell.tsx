import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";

import CSS from 'csstype';
import Box from '@mui/material/Box';
const sstyle: CSS.Properties = {
  float: "left",
}

const PointValuesCell = (props: ICellRendererParams) => {
  const v = props.value;

  if (v === null) {
    return (
    <Box
          sx={{
            bgcolor: 'info.main',
            color: 'info.contrastText',
          }}
        >
          Not Weighted
        </Box>
    );
  }
  if (v === -1) {
    return (
    <Box
          sx={{
            bgcolor: 'error.main',
            color: 'error.contrastText',
          }}
        >
          Missing
        </Box>
    );
  }

  const iv = v.toFixed(0);
  var ivf = iv.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <span style={sstyle}>
      <div>${ivf}</div>
    </span>
  );
};


export default PointValuesCell;