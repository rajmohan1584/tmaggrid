import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles.css';
import { matchesData, IMatches } from '../data/matches';
import { ColDef } from 'ag-grid-enterprise';
import { ColGroupDef, GridReadyEvent } from 'ag-grid-community';

import { PriceQtyCell, PriceQtyHeader } from './PriceQty';
import { YieldSpreadCell, YieldSpreadHeader } from './YieldSpread';
import { BuyActionCell } from './BuyActionCell';
import * as CONST from '../utils/constants';

const BasicGrid = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '500px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%', fontSize: '10px' }), []);
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
    { field: 'cusip', pinned:'left', headerName: 'CUSIP', width: 125 },
    { field: 'clientId', pinned: 'left', headerName:'Client' },
    { field: 'accountXref', headerName: 'Act Xref', width: 125 },
    { field: 'quantity', headerName: 'Qty' },
    { field: 'state', headerName: 'State', width: 85 },
    { field: 'ratingText', headerName: 'Rating', width: 85 },
    { field: 'securityInfo.maturityDate', headerName: 'Mat Date', width:125 },
    { field: 'coupon', headerName: 'Coupon' },
    {
      headerName: " MARKET",
      headerClass: "marketHeaderGroup",
      children: [
        {
          field: 'priceQty',
          headerComponent: PriceQtyHeader,
          cellRenderer: PriceQtyCell,
          valueGetter: (params) => [params.data['price'], params.data['qty']]
        },
        {
          field: 'yieldSpread',
          headerComponent: YieldSpreadHeader,
          cellRenderer: YieldSpreadCell,
          valueGetter: (params) => [params.data['yield'], params.data['spread']]
        }]
    },
    { field: 'matchCount', headerName: 'Matches' },
    { field: 'callDate', headerName: 'Call Date', width: 125 },
    { field: 'callPrice', headerName: 'Call Price', width: 125 },

    {
      field: 'action', headerName: 'Actions', pinned: 'right',
      //cellRenderer: ActionCell,
      valueGetter: (params) => (params.data.matchCount) ? true : false
    },
    {
      headerName:"ACTION",
      openByDefault: true,
      marryChildren: true,
      children:[
        {width:44, cellStyle:{padding:"0px",margin:"0px"},cellRenderer:BuyActionCell, pinned:"right"},
        {width:44, cellStyle:{padding:"0px",margin:"0px"},cellRenderer:BuyActionCell, pinned:"right", columnGroupShow: "open"},
        {width:44, cellStyle:{padding:"0px",margin:"0px"},cellRenderer:BuyActionCell, pinned:"right", columnGroupShow: "open"},
        {width:44, cellStyle:{padding:"0px",margin:"0px"},cellRenderer:BuyActionCell, pinned:"right", columnGroupShow: "open"}
      ]
    }
  ]);
  const [rowData, setRowData] = useState<IMatches[]>();
  
  
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
    setRowData(matchesData);
  }, []);


  return (
    <div style={containerStyle}>
      <div className="ag-theme-alpine" style={gridStyle} >
        <AgGridReact
          rowHeight={40}
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

export default BasicGrid;