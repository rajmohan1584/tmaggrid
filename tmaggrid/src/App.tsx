import './App.css';
import { useState } from 'react';
import BasicGrid from './gird/BasicGrid';
import {ButtonAppBar} from './nav/AppBar';
import Home from './screens/Home';
import Surveillance from './screens/Surveillance';
import Box from '@mui/material/Box';

function App() {
  const [screen, setScreen] = useState("home");

  const onSelect = (name: string) => {
    setScreen(name);
  }
    
  const renderScreen = () => {
    if (screen === "surveillance") return <Surveillance />
    if (screen === "swapspool") return <BasicGrid />;
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
