import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppleIcon from "@mui/icons-material/Apple";
import '../screens.css';

const toolbarStyle = {
    minHeight: '28px',
    backgroundColor: "grey",
    color: "white",
    paddingLeft: '4px'
};

type SurveillanceToolbarProps = {
  title?: string;
}

export const SurveillanceToolbar = ({ title }: SurveillanceToolbarProps) => {
  return (
    <Toolbar style={toolbarStyle}>
      <AppleIcon />
      <Typography style={{ marginLeft: 8,  fontSize: 14 }} color="white">Finance Data Summary by Sector</Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
    </Toolbar>
  );
};
