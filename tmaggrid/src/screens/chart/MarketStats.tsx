import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-enterprise';
import { ColGroupDef, GridReadyEvent, AgChartThemeOverrides, FirstDataRenderedEvent, CreateRangeChartParams } from 'ag-grid-community';

import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import * as CONST from '../../utils/constants';

//import MarketStatsCell from '../../gird/MarketStatsCell';

import '../screens.css'
import { /*marketStatsData,*/ IMarketStats } from '../../data/MarketStats';
import MarketStatsCell from '../../gird/MarketStatsCell';

const MarketStatsGrid = () => {
  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(() => ({ display: "flex", width: '75%', height: '350px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%', fontSize: '13px' }), []);

  const intervalref = useRef<number | null>(null);
  const startInterval = () => {
    if (intervalref.current !== null) return;
    intervalref.current = window.setInterval(() => {
        updateData();
    }, 500);
  };

  /*
  // Stop the interval
    const stopInterval = () => {
        if (intervalref.current) {
            window.clearInterval(intervalref.current);
            intervalref.current = null;
        }
    };
    */
    // Use the useEffect hook to cleanup the interval when the component unmounts
    useEffect(() => {
        // here's the cleanup function
        return () => {
            if (intervalref.current !== null) {
              window.clearInterval(intervalref.current);
            }
        };
    }, []);

  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
    { field: 'name', cellStyle: {textAlign: 'left'}, pinned: 'left',  headerName: 'SEG', width: 80 },
    { field: 'recordCount', headerName: 'Rec', cellRenderer: MarketStatsCell },
    { field: 'secCount', headerName: 'Sec', cellRenderer: MarketStatsCell  },
    { field: 'messageRate', headerName: 'V#3', cellRenderer: MarketStatsCell  },
    { field: 'updates', headerName: 'V#4', cellRenderer: MarketStatsCell },
  ]);

  const [rowData, setRowData] = useState<IMarketStats[]>();


  const defaultColDef = useMemo<ColDef>(() => {
    return {
      width: 85,
      filter: 'agTextColumnFilter',
      editable: false,
      sortable: true,
      resizable: true,
    };
  }, []);

  const popupParent = useMemo<HTMLElement | null>(() => {
    return document.body;
  }, []);
  const chartThemeOverrides = useMemo<AgChartThemeOverrides>(() => {
    return {
      common: {
        title: {
          enabled: true,
          text: 'Medals by Age',
        },
        legend: {
          position: 'bottom',
        },
      },
      column: {
        axes: {
          category: {
            label: {
              rotation: 0,
            },
          },
        },
      },
    };
  }, []);

  const randomInt = (min: number,max: number) => {
    let v = Math.random() * (max-min) + min;
    v = Math.round(v);
    return v;
  }

  const updateData = () => {
    const data = [];
    for (let i=0; i<10; i++) {
        data.push({
            name: `SEG${i+1}`,
            recordCount: randomInt(75000, 10000),
            secCount: randomInt(75000, 10000),
            messageRate: randomInt(75000, 10000),
            updates: randomInt(75000, 100000),
        });
    }
    setRowData(data);
  }

  const onGridReady = useCallback((params: GridReadyEvent) => {
    updateData();
  }, []);

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    var createRangeChartParams: CreateRangeChartParams = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 79,
        columns: ['name', 'recordCount', 'secCount', 'messageRate', 'updates'],
      },
      chartType: 'groupedColumn',
      chartContainer: document.querySelector('#myChart') as any,
      aggFunc: 'sum',
    };
    gridRef.current!.api.createRangeChart(createRangeChartParams);

    startInterval();
  }, []);

  return (
    <div style={containerStyle}>
      <div className="ag-theme-alpine" style={gridStyle} >
        <AgGridReact
          ref={gridRef}
          rowHeight={30}
          headerHeight={30}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          sideBar={CONST.sideBar}
          onGridReady={onGridReady}
          onFirstDataRendered={onFirstDataRendered}
          enableCharts={true}
          chartThemeOverrides={chartThemeOverrides}
          popupParent={popupParent}
        ></AgGridReact>
      </div>
      <div id="myChart" className="ag-theme-alpine my-chart"></div>
    </div>
  );
};

function MarketStatsCard() {
  return (
    <Card className="odin2-card">
      <CardContent className="odin2-card-content">
      <MarketStatsGrid />
      </CardContent>
    </Card>
  );
}

export default function MarketStats() {
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
          <Grid item md={10}><MarketStatsCard /></Grid>
        </Grid>
    </div>
  );
}
