import { ICellRendererParams } from 'ag-grid-community';
import "./styles.css";
import CSS from 'csstype';
import Box from '@mui/material/Box';

export default (props: ICellRendererParams) => {
    return (
    <Box
            sx={{
            cursor:"pointer",width:"36px",height:"36px",textAlign:"center",
            margin:"3px",color:"white",backgroundColor: "rgb(80, 109, 145)", borderRadius: "6px",
            }}
            >
                {"BUY"}
            </Box>
    );
};
