import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './ui/textField'
import Button from './ui/button'
import { BorderColorOutlined } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
      <br />

      <TextField
      hint={"Disabled"}
        fullWidth={true}
        disabled={true} />
      <br />
      <br />
      <TextField
        fullWidth={true}
        focused={true}
        
        multiline={true}
        onChange={(e: any) => {
          console.log("ELAD", "App", "onChange", "e", e);
        }
        } />
      <br />
      <br />
      <TextField
        textHelper='this is helper text'
        hint='hint text'
      />
      <Button />
    </div>
  );
}

export default App;
