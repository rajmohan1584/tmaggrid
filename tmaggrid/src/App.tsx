import './App.css';
import { useState } from 'react';
import BasicGrid from './gird/BasicGrid';
import {ButtonAppBar} from './nav/AppBar';
import Home from './screens/Home';
import Surveillance from './screens/surveillance/Surveillance';
import Box from '@mui/material/Box';
import PointValues from './screens/pointvalues/PointValues';
import ComparativeAnalysis from './screens/analysis/ComparativeAnalysis';
import MarketStats from './screens/chart/MarketStats';

function App() {
  const [screen, setScreen] = useState("");

  const onSelect = (name: string) => {
    setScreen(name);
  }
    
  const renderScreen = () => {
    if (screen === "surveillance") return <Surveillance />
    if (screen === "swapspool") return <BasicGrid />;
    if (screen === "marketstats") return <MarketStats />
    if (screen === "pointvalues") return <PointValues />;
    if (screen === "comparativeanalysis") return <ComparativeAnalysis />;
    
    return <Home />;
  }
  return (
    <div className="App">
      <ButtonAppBar onSelect={onSelect} />
      <Box sx={{ height: '25px' }} />
      {renderScreen()}
    </div>
  );
}

export default App;

/*
      <ButtonAppBar onSelect={function (name: string): void {
        throw new Error('Function not implemented.');
      }} />
*/
