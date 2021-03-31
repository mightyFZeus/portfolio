
import './App.css';
import { Fragment } from 'react';
import Home from './Components/Index';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerTest from './Components/DrawerTest';
import NavBarTwo from './Components/NavBarTwo';
import Header from './Components/Header';

function App() {
  return (
    <>
      <CssBaseline />
        
        {/* <Home />*/}
        {/* <DrawerTest />  */}
        <NavBarTwo />
        <Header />

    </>
  );
}

export default App;
