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

import PointValuesCell from '../../gird/PointValuesCell';
import {PointValuesToolbar} from './PointValuesToolbar';

import '../screens.css'
import { pointValuesData, IPointValues } from '../../data/PointValues';

const PointValuesGrid = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '300px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%', fontSize: '14px' }), []);
  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
    { field: 'point', cellStyle: {textAlign: 'left'}, pinned: 'left',  headerName: 'Point', width: 225 },
    { field: 'c1', headerName: '03/31/20', cellRenderer: PointValuesCell },
    { field: 'c2', headerName: '03/31/19', cellRenderer: PointValuesCell },
    { field: 'c3', headerName: '03/31/18', cellRenderer: PointValuesCell },
    { field: 'c4', headerName: '03/31/17', cellRenderer: PointValuesCell },
    { field: 'c5', headerName: '03/31/16', cellRenderer: PointValuesCell },
  ]);

  const [rowData, setRowData] = useState<IPointValues[]>();


  const defaultColDef = useMemo<ColDef>(() => {
    return {
      width: 150,
      filter: 'agTextColumnFilter',
      editable: false,
      sortable: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    setRowData(pointValuesData);
  }, []);


  return (
    <div style={containerStyle}>
      <div className="ag-theme-alpine" style={gridStyle} >
        <AgGridReact
          rowHeight={30}
          headerHeight={30}
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

function PointValuesCard() {
  return (
    <Card className="odin2-card">
      <CardContent className="odin2-card-content">
      <PointValuesToolbar />
      <PointValuesGrid />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function PointValues() {
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
          <Grid item md={10}><PointValuesCard /></Grid>
          <Grid item md={10}><PointValuesCard /></Grid>
          <Grid item md={10}><PointValuesCard /></Grid>
          <Grid item md={10}><PointValuesCard /></Grid>
          <Grid item md={10}><PointValuesCard /></Grid>
        </Grid>
    </div>
  );
}
