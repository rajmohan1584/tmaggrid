import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";
import Box from '@mui/material/Box';

export default (props: ICellRendererParams) => {
    return (
    <Box
            sx={{
            cursor:"pointer",width:"32px",height:"32px",textAlign:"center",
            margin:"4px",color:"white",backgroundColor: "rgb(167, 71, 71)", borderRadius: "6px",
            }}
            >
                {"SELL"}
            </Box>
    );
};
