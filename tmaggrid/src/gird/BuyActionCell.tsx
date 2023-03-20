import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";
import Box from '@mui/material/Box';

const BuyActionCell = (props: ICellRendererParams) => {
    return (
    <Box
            sx={{
            cursor:"pointer",width:"32px",height:"32px",textAlign:"center",
            margin:"4px",color:"white",backgroundColor: "rgb(80, 109, 145)", borderRadius: "6px",
            }}
            >
                {"BUY"}
            </Box>
    );
};

export default BuyActionCell;