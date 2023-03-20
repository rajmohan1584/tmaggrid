import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";

//import CSS from 'csstype';
import Box from '@mui/material/Box';
/*
const sstyle: CSS.Properties = {
  float: "left",
}
*/
const ComparativeAnalysisQuartileCell = (props: ICellRendererParams) => {
  const v = props.value;

  let sv = null;
  let color = "black";
  switch(v) {
    case 1:
        sv = "1st";
        color = '#f9b6c2'
        break;
    case 2:
        sv = "2nd";
        color = '#f6ca5e'
        break;
    case 3:
        sv = "3rd";
        color = '#FFF200'
        break;
    case 4:
        sv = "4th";
        color = '#95f28f'
        break;
  }
  if (sv === null) return null;

    return (
    <Box
            sx={{
                bgcolor: color,
            }}
            >
                {sv}
            </Box>
        );
};

export default ComparativeAnalysisQuartileCell;