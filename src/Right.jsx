import { Box } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Right() {
    const gender = [
        {label: 'Html'},{label: 'Reactjs'},{label: 'Django'}
    ];
  return (
    <Box  flex={6} p={10}>

<Item> 
        <label htmlFor="">Last Name <span className='astrix'>*</span></label><br />
        <TextField placeholder="Last Name" id="fullWidth"  sx={{
        width: 500,
        maxWidth: '100%',       
        paddingBottom:3
        
      }}/> 
      
        <label htmlFor="">Email Id <span className='astrix'>*</span></label><br />
        <TextField placeholder="Email Id"  id="fullWidth"  sx={{
        width: 500,
        maxWidth: '100%', 
        paddingBottom:3,  
        marginTop:1    
      }}/> <br />
  <label htmlFor="">Confirm Password <span className='astrix'>*</span></label><br />
        <TextField placeholder="Confirm Password"  id="fullWidth"  sx={{
        width: 500,
        maxWidth: '100%',  
        paddingBottom:3,
        marginTop:-0.5     
      }}/>
     
     <label htmlFor="">Roles <span className='astrix'>*</span></label><br />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={gender}
      sx={{ width: 500}}
      renderInput={(params) => <TextField {...params} placeholder="Roles"  />}
    />
    <br />

    <label htmlFor="">Skills <span className='astrix'>*</span></label><br />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={gender}
      sx={{ width: 500}}
      renderInput={(params) => <TextField {...params} placeholder="Skills"  />
    }
    />
 <br />
 <label htmlFor="">Address <span className='astrix'>*</span></label><br />
    <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
          placeholder='Address'
          sx={{
              m: 0, width: '58ch' ,paddingBottom:3
          }}
        />
  
  <label htmlFor="">Additional Info <span className='astrix'>*</span></label>
<TextField
          id="outlined-multiline-static"
          label="Additional Info"
          multiline
          rows={4}
          placeholder='Additional Info'
          sx={{
              m: 0, width: '58ch' ,
          }}
        />
    </Item>
    </Box>
  )
}

export default Right