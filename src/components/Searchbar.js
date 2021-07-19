import { Paper, TextField } from "@material-ui/core";
import { useState } from "react";

const Searchbar = ({onSearch}) =>{
    const [searchterm,setsearchterm]=useState("");

    const inputhandler = (e) =>{
        setsearchterm(e.target.value);
    }

    const keypresshandler = (e) =>{
        if(e.key === 'Enter'){
            onSearch(searchterm);
        }
    }

    return (
        <Paper elevation={6} style={{ padding: "25px" }}>
            <TextField 
             fullWidth
             label='Search...'
             value={searchterm}
             onChange={inputhandler}
             onKeyPress={keypresshandler}
            />
        </Paper>
    )
}

export default Searchbar;