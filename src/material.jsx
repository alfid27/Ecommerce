import React, {Component} from 'react';
import './App.css';


import Box from '@material-ui/core/box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Materials extends Component {
    constructor (props) {
        super (props);
        this.state = {
            nama : ''
        };

    
    }
    
    onChangeHandler = (event) => {
        //console.log ("jalan");
        let nama   = event.target.nama;
       console.log(nama);
        this.setState({
            [nama]  : this.nama  
        });
    }

    render () {
        return (
            <div className="App">
            <Box component="span" display="block">
              <TextField
                id="standart-with-placeholder"
                label="Nama Lengkap"
                placeholder="Masukan Nama"
                margin="normal"
                defaultValue={this.state.nama}
                onChange={this.onChangeHandler}
              />
            </Box>
             <Box component="span" display="block">
             <Button variant="contained" color="primary" type="submit">
               Ganti Nama
              </Button>  
            </Box>
            <form onSubmit={this.onSubmitHandle}>
            {/* <nama nama ={this.state.nama}></nama> */}
            </form>
            <h1>Hello {this.state.nama}</h1>
          </div>

        );
    }
}


export default Materials;