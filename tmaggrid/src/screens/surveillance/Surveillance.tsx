import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-enterprise';
import { ColGroupDef, GridReadyEvent } from 'ag-grid-community';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import * as CONST from '../../utils/constants';

import DotPercentCell from '../../gird/DotPercentCell';

import '../screens.css';
import { surveillanceData, ISurveillance } from '../../data/Surveillance';
import { SurveillanceToolbar } from './SurveillanceToolbar';

const SurveillanceGrid = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '250px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%', fontSize: '10px' }), []);
  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
    { field: 'sector', pinned: 'left', cellStyle: {textAlign: 'left'}, headerName: 'Sector', width: 100 },
    { field: 'credits', type: 'rightAligned', aggFunc: "sum", valueParser: "Number(newValue)", headerName: 'Credits' },
    { field: 'fye23', type: 'rightAligned', aggFunc: "sum", valueParser: "Number(newValue)", cellRenderer: DotPercentCell, headerName: 'FYE23', width: 80 },
    { field: 'fye22', type: 'rightAligned', aggFunc: "sum", valueParser: "Number(newValue)", cellRenderer: DotPercentCell, headerName: 'FYE22', width: 80 },
    { field: 'fye21', type: 'rightAligned', aggFunc: "sum", valueParser: "Number(newValue)", cellRenderer: DotPercentCell, headerName: 'FYE21', width: 80 },
  ]);
  const [rowData, setRowData] = useState<ISurveillance[]>();


  const defaultColDef = useMemo<ColDef>(() => {
    return {
      width: 100,
      filter: 'agTextColumnFilter',
      editable: true,
      sortable: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    setRowData(surveillanceData);
  }, []);


  return (
    <div style={containerStyle}>
      <div className="ag-theme-alpine" style={gridStyle} >
        <AgGridReact
          rowHeight={20}
          headerHeight={20}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          sideBar={CONST.sideBar}
          onGridReady={onGridReady}
          groupIncludeTotalFooter={true}
        ></AgGridReact>
      </div>
    </div>
  );
};

function SurveillanceCard() {
  return (
    <Card className="odin2-card">
      <SurveillanceToolbar />
      <CardContent className="odin2-card-content">
        <SurveillanceGrid />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function Surveillance() {
  return (
    <div style={{ width: '100%' }}>
      <Grid container spacing={4}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
          <Grid item md={5}><SurveillanceCard /></Grid>
          <Grid item md={5}><SurveillanceCard /></Grid>
          <Grid item md={5}><SurveillanceCard /></Grid>
          <Grid item md={5}><SurveillanceCard /></Grid>
          <Grid item md={5}><SurveillanceCard /></Grid>
          <Grid item md={5}><SurveillanceCard /></Grid>
        </Grid>
    </div>
  );
}
