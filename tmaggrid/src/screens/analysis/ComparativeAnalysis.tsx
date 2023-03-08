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

import ComparativeAnalysisValueCell from '../../gird/ComparativeAnalysisValueCell';
import ComparativeAnalysisScoreCell from '../../gird/ComparativeAnalysisScoreCell';
import ComparativeAnalysisQuartileCell from '../../gird/ComparativeAnalysisQuartileCell';

import '../screens.css';
import { comparativeAnalysisData, IComparativeAnalysis } from '../../data/ComparativeAnalysis';
//import { ComparativeAnalysisToolbar } from './ComparativeAnalysisToolbar';

const ComparativeAnalysisGrid = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '425px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%', fontSize: '10px' }), []);
  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
        headerName: "",
        children: [{
        headerName: "As of Date", width: 80, headerClass:'odin2-ag-header-right',
        children: [{
                headerName: "Credit Unverse Size", width: 80,
                children: [
                    {field: 'name', headerName:'', pinned: 'left', cellStyle: {textAlign: 'left'}},
                ]
          }]
        }]
    },{
        headerName: "Ada Township, MI",
        children: [{
            headerName: "03/31/2020",
            children: [{
                headerName: "1",
                children: [
                    {field: 'v1', headerName:'Value', width: 125,
                        cellRenderer:ComparativeAnalysisValueCell},
                    {field: 's1', headerName:'Score', width: 80, 
                        cellRenderer:ComparativeAnalysisScoreCell,
                        cellStyle: {paddingLeft: 30, paddingTop: 2}},
                    {field: 'q1', headerName:'Quartile', width: 100,
                        cellRenderer: ComparativeAnalysisQuartileCell,
                        cellStyle: {paddingLeft: 0, paddingRight: 0}}
                ]
            }]
          }]
    },{
        headerName: "Cohort",
        children: [{
            headerName: "FYE20 (Average)",
            children: [{
                headerName: "243",
                children: [
                    {field: 'v2', headerName:'Value', width: 125, cellRenderer:ComparativeAnalysisValueCell},
                    {field: 's2', headerName:'Score', width: 80, 
                        cellRenderer:ComparativeAnalysisScoreCell,
                        cellStyle: {paddingLeft: 30, paddingTop: 2}},
                    {field: 'h2', headerName:'High', width: 125, cellRenderer:ComparativeAnalysisValueCell},
                    {field: 'l2', headerName:'Low', width: 100, cellRenderer:ComparativeAnalysisValueCell}
                ]
            }]
          }]
    },{
        headerName: "Total Exposure",
        children: [{
            headerName: "FYE20 (Average)",
            children: [{
                headerName: "0",
                children: [
                    {field: 'v3', headerName:'Value', width: 80},
                    {field: 's3', headerName:'Score', width: 80,
                        cellRenderer:ComparativeAnalysisScoreCell,
                        cellStyle: {paddingLeft: 30, paddingTop: 2}},
                    {field: 'h3', headerName:'High', width: 75},
                    {field: 'l3', headerName:'Low', width: 70}
                ]
            }]
          }]
    } 
]);
  
const [rowData, setRowData] = useState<IComparativeAnalysis[]>();


  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: 'agTextColumnFilter',
      editable: true,
      sortable: true,
      resizable: true,
      cellStyle: {border: '1px solid', paddingLeft: 4, paddingRight:4}
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    setRowData(comparativeAnalysisData);
  }, []);


  return (
    <div style={containerStyle}>
      <div className="ag-theme-alpine" style={gridStyle} >
        <AgGridReact
          rowHeight={30}
          headerHeight={25}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          sideBar={CONST.sideBar}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
};

function ComparativeAnalysisCard() {
  return (
    <Card className="odin2-card">
      <CardContent className="odin2-card-content">
        <ComparativeAnalysisGrid />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function ComparativeAnalysis() {
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
          <Grid item md={10}><ComparativeAnalysisCard /></Grid>
          <Grid item md={10}><ComparativeAnalysisCard /></Grid>
          <Grid item md={10}><ComparativeAnalysisCard /></Grid>
          <Grid item md={10}><ComparativeAnalysisCard /></Grid>
          <Grid item md={10}><ComparativeAnalysisCard /></Grid>
          <Grid item md={10}><ComparativeAnalysisCard /></Grid>
        </Grid>
    </div>
  );
}
