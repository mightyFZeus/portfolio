
import './App.css';
import { Fragment } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import NavBarTwo from './Components/NavBarTwo';
import Header from './Components/Header';
import Particles from 'react-particles-js'




function App() {
  // 
  return (
    <>
      <CssBaseline />
      
        <NavBarTwo />
        <Header />
        <Particles
        style={{position:'absolute'}}
        
      params={{
        particles:{
          number:{
            value:45,
            density:{
              enable:true,
              value_area:900
            },
            shape:{
              type:'circle',
              stroke:{
                width:1,
                color:'tomato'
              }
            },
            size:{
              value:8,
              random:true,
              anim:{
                enable:true,
                speed:10,
                size_min:6,
                sync:true
              }
            },
            opcaity:{
              value:1,
              random:true,
              anim:{
                enable:true,
                speed:1,
                opcaity_min:0.1,
                sync:true
              }
            }
          }
        }
      }}
      />

    </>
  );
}


export default App;
