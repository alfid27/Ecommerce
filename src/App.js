import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function App() {
 
  return (
    <div className="App">
            <Box component="span" display="block">
              <TextField
                id="standart-with-placeholder"
                label="Nama Lengkap"
                placeholder="Masukan Nama"
                margin="normal"
                value={this.state.nama}
                onChange={this.handleNama}
              />
            </Box>
             <Box component="span" display="block">
             <Button variant="contained" color="primary" type="submit">
               Ganti Nama
              </Button>  
            </Box>
           
          </div>

  );
}

export default App;
