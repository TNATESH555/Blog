import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function Sampletxt() {
    const [name, setName] = useState('');
    const [err, setErr] = useState(false);

    const handlechange=()=>{
  
           if (name.trim() === '') {
                setErr(true);
            } else {
                console.log(name)
                setErr(false);
            }  
    }
   
    return (
        <div>
            {err &&(
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter first name
                </Typography>
            )}
            <br />
            <TextField
                placeholder="First Name"
                id="fullWidth"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    paddingBottom: 3,
                }}
            />
            <button onClick={handlechange}>BUTTON</button>
        </div>
    );
}

export default Sampletxt;
