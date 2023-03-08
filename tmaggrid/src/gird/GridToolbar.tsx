import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import './styles.css';

const toolbarStyle = {
    minHeight: '28px',
    backgroundColor: "grey",
    color: "white",
    paddingLeft: '4px'
};

type GridToolbarProps = {
  title: string;
}

const DocumentType = () => {
    const [docType, setDocType] = useState<string>("AFS");

    return (
        <>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={docType}
            label="Age"
            style={{ height: 24, backgroundColor: "lightgrey", fontSize: 10 }}
            onChange={(event) => setDocType(event.target.value)}
        >
            <MenuItem value={"AFS"}>AFS</MenuItem>
            <MenuItem value={"BFS"}>BFS</MenuItem>
            <MenuItem value={"CFS"}>CFS</MenuItem>
            <MenuItem value={"DFS"}>CFS</MenuItem>
            <MenuItem value={"EFS"}>CFS</MenuItem>
        </Select>
        </>
    )
}

const SourceDropdown = () => {
    const [source, setSource] = useState<string>("1");

    return (
        <>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={source}
            label="Age"
            style={{ height: 24, backgroundColor: "lightgrey", fontSize: 10 }}
            onChange={(event) => setSource(event.target.value)}
        >
            <MenuItem value={"1"}>Financial and Economic Data</MenuItem>
            <MenuItem value={"2"}>Wall Street Journel</MenuItem>
            <MenuItem value={"3"}>Main Street Journel</MenuItem>
        </Select>
        </>
    )
}

export const GridToolbar = ({ title }: GridToolbarProps) => {
  return (
    <Toolbar style={toolbarStyle}>
      <AppleIcon />
      <Typography style={{ marginLeft: 8,  fontSize: 14 }} color="white">Point Values</Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
      <Typography color="white" style={{ fontSize: 12, marginRight: 4 }}>Document Type: </Typography>
      <DocumentType />
      <Typography style={{ marginRight: 32 }}></Typography>
      <Typography color="white" style={{ fontSize: 12, marginRight: 4 }}>Source:</Typography>
      <SourceDropdown />
    </Toolbar>
  );
};
