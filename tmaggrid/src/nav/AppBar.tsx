import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

import odin2Logo from "../assets/odin2.png";

import {TopMenuCallbackProps, TopMenuItem } from './TopMenuItem';
import { Search, SearchIconWrapper, StyledInputBase } from './Search';
import { BreadcrumbBar } from './BreadcrumbBar';

import './AppBar.css';

const ClientName = () => {
  return (
    <div className="odin2-app-client-wrapper">
      <div className="odin2-app-client-label">CLIENT:</div>
      <div className="odin2-app-client-name">Municipal Research Advisors</div>
    </div>
  );
};

//export const ButtonAppBar = (onSelect: (name: string) => void) => {
export const ButtonAppBar: React.FC<TopMenuCallbackProps> = ({ onSelect }: TopMenuCallbackProps) => {

  const topMenu1 = {
    text: 'Menu1',
    callback: { onSelect },
    items: [
      { text: 'Surveillance', name: 'surveillance' },
//      { text: 'WATCH LISTS', name: 'watchlists' },
//      { text: 'SEARCH', name: 'search' },
      {text: 'SWAPS POOL', name: 'swapspool'},
    ]
  };

  const excelMenu = {
    text: "Excel",
    callback: { onSelect },
    items: [
      { text: 'Point Values', name: 'pointvalues' },
      { text: 'Comparative Analysis', name: 'comparativeanalysis' },
    ]
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='odin2-app-toolbar'>
          <Toolbar variant="dense">
          <img src={odin2Logo} alt={""} width={120} height={44} />
          <Typography style={{ marginRight: 16 }}></Typography>
          <ClientName />
          <Typography style={{ marginRight: 32 }}></Typography>
          <TopMenuItem tmi={topMenu1} />
          <TopMenuItem tmi={topMenu1} />
          <TopMenuItem tmi={topMenu1} />
          <TopMenuItem tmi={excelMenu} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color={'primary'} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <BreadcrumbBar crumbs={["12222", "22222"]} />
    </Box>
  );
}
