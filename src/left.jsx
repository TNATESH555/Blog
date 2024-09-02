import React, { useState } from 'react';
import {Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Left() {
     
  const [name,setname]=useState('')
  const [dob,setdob]=useState('')
  const [Password,setPassword]=useState('')
  const [genders,setgender]=useState('')
  const [departments,setdepartment]=useState('')
  const [error,seterror]=useState(false)
  const [active,setactive]=useState('')
 
     const handlechange=()=>{
      if (name.trim()===''){
     seterror(true)}
     else{
      console.log(name)
      seterror(false)
     }

     }
    const skills = [
      {label: 'Html'},{label: 'Reactjs'},{label: 'Django'}
  ];

    const gender = [
        { label: 'Male' },
        { label: 'Female' },
        { label: 'Others' }
    ];

    const department = [
        { label: 'Physics' },
        { label: 'Chemistry' },
        { label: 'Maths' }
    ];

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
    }));

    return (
      <Stack direction="row" spacing={2} paddingTop={10}>
        <Item>
            <Typography variant="h6" component="p" paddingBottom={2}>
                <span className='Edit'>Edit User</span>
            </Typography>
            <br />
          
            <label htmlFor="">
                First Name <span className="astrix">*</span>
            </label>
            
            {!name && (
            <Typography variant="caption" color="error" marginLeft={3}>
              Enter first name
            </Typography> 
            )}<br />
            <TextField
                placeholder="First Name"
                id="fullWidth"
                onChange={(e)=>{
                  setname(e.target.value)
                }}
                value={name}
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    paddingBottom: 3,
                    
                }}
            />
            <br />
           
            <label htmlFor="" >
                Date of Birth <span className="astrix">*</span>
            </label>
            {!dob && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Your date Of birth
                </Typography> 
            )}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="DD/MM/YYYY" className="date" />
                </DemoContainer>
            </LocalizationProvider>
            <br />

            <label htmlFor="">Password</label>
            {!Password && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Your Password
                </Typography> 
            )} <br />
            <TextField
                placeholder="Password"
                id="fullWidth"            
                onChange={(e)=>setPassword(e.target.value)}            
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    paddingBottom: 3
                }}
            />
            <br />
            <label htmlFor="">
                Gender <span className="astrix">*</span>
            </label>
            {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select your Gender
                </Typography> 
            )}
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={gender}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} placeholder="Gender" />}
            />
            <br />

            <label htmlFor="">
                Department <span className="astrix">*</span>
            </label>
            {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Choose Your Department
                </Typography> 
            )}
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={departments}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params}  placeholder="Department" />}
            />
            <br />

            <label htmlFor="">
                Degrees <span className="astrix">*</span>
            </label>
            {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select Your Degree
                </Typography> 
            )}
            <br />
            <div className="check" >
                <Checkbox></Checkbox>
                <label>BE</label>

                <Checkbox></Checkbox>
                <label>ME</label>

                <Checkbox></Checkbox>
                <label>Bsc</label>

                <Checkbox></Checkbox>
                <label>Msc</label>

                <Checkbox></Checkbox>
                <label>MBA</label>
                <br />
                <br />
            </div>

            <label htmlFor="">
                Status<span className="astrix">*</span>
            </label>
            {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select Status
                </Typography> 
            )}
            <br />
            <div onChange={(e) => setactive(e.target.value)}>
                <FormControlLabel value="active" control={<Radio />} label="Active" />
                <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
            </div>

            <Button variant="contained" sx={{ marginTop: 16 }} onSubmit={handlechange}>
                SUBMIT
            </Button>
        </Item>
           
        <Item sx={{paddingTop:10.1}}> 
            <label htmlFor="">Last Name <span className='astrix'>*</span></label> {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Last name
                </Typography> 
            )}<br />

            <TextField placeholder="Last Name" id="fullWidth"  sx={{
                width: 500,
                maxWidth: '100%',       
                paddingBottom:3
            }}/> 
            <br />
            <label htmlFor="">Email Id <span className='astrix'>*</span></label> {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Email ID
                </Typography> 
            )}
            <br />
            <TextField placeholder="Email Id"  id="fullWidth"  sx={{
                width: 500,
                maxWidth: '100%', 
                paddingBottom:3,  
                marginTop:1    
            }}/> <br />
            <label htmlFor="">Confirm Password <span className='astrix'>*</span></label>
            {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Confirm Password
                </Typography> 
            )}<br />
            <TextField placeholder="Confirm Password"  id="fullWidth"  sx={{
                width: 500,
                maxWidth: '100%',  
                paddingBottom:3,
                marginTop:-0.5     
            }}/>
         
         <br />
         <label htmlFor="">Roles <span className='astrix'>*</span></label>
         {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select Roles
                </Typography> 
            )}<br />
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={department}
            sx={{ width: 500}}
            renderInput={(params) => <TextField {...params} placeholder="Roles"  />}
        />
        <br />

        <label htmlFor="">Skills <span className='astrix'>*</span></label>
        {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                   Select Your Skills
                </Typography> 
            )}<br />
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={skills}
            sx={{ width: 500}}
            renderInput={(params) => <TextField {...params} placeholder="Skills"  />}
        />
        <br />
        <label htmlFor="">Address <span className='astrix'>*</span></label>
        {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Your Address
                </Typography> 
            )}<br />
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
      
      <br />
      <label htmlFor="">Additional Info <span className='astrix'>*</span></label>
      {!error && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Additional Information
                </Typography> 
            )}
    <br />
    <TextField
            id="outlined-multiline-static"
            label="Additional Info"
            multiline
            onChange={()=>s}
            rows={4}
            placeholder='Additional Info'
            sx={{
                m: 0, width: '58ch' ,
            }}
        />
    </Item>

</Stack>
);
}

export default Left;