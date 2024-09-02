import React from 'react';
import { Stack, Typography, TextField,Button, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import './App.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));


function Right() {
  const [name, setname] = useState('');
  const [error, setrror] = useState('');
  const [dob,setdob]=useState('')
  const [Password,setPassword]=useState('')
  const [genders,setgender]=useState('')
  const [active,setactive]=useState('')
  const [lastname,setlastname]=useState('')
  const [email, setemail] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [address, setaddress] = useState('');
  const [additionalinfo, setadditionalinfo] = useState('');
  const [degree,setdegree]=useState('BE')
  const [role,setrole]=useState('')
  const [skills,setskills]=useState('')
  const [department,setdepartment]=useState('')
  const [selection, setSelection] = useState("");
  const [checkerror,setcheckerror]=useState(true)


const handleclock=(e)=>{
     setdob(e.toString())
}

const handledepartment=(e)=>{

   setdepartment(e.target.value)
}
  const Handlegene = ( value) => {
    setgender(value.target.value)
    
  };;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Handleskill=(e)=>{
    setskills(e.target.value)
  }
  const handleSelectionChange=(e,)=>{
    setSelection(e);

    const active_space=(e.toString())
      if (active_space==='active') {
          setactive('active');
      }
          else{
          setactive('inactive')
          }    
  }
  const isValidEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  var Handlecheck = (e) => {
      const {value,checked}=e.target
    if (checked) {
       setdegree(value);         
    } 
    setcheckerror(false)
 };

 const Handlerole=(event)=>{
  setrole(event.target.value) 
 }

const handleclick=(e)=>{
  const checkValue = e.target.value;

    if(name.trim===''||Password.trim()===''
      ||!isValidEmail(email)||genders.trim()===''||
    additionalinfo.trim()===''||email.trim()===''||
    dob.trim()===''||role.trim()===''||skills===''||
    address.trim()===''||department.trim()===''||selection.trim()===''||confirmpassword.trim()===''||confirmpassword!==Password){
        setrror(true)
        }
   
        else{
          console.log('name:',name)
          console.log('password:',Password)
          console.log('dob:',dob)
          console.log('lastname:',lastname)
          console.log('gender:',genders)
          console.log('Department:',department);
          console.log('confirmpassword:',confirmpassword)
          console.log('address:',address)
          console.log('additionalinfo:',additionalinfo)
          console.log('Status:',active)
          console.log('gender',genders)
          console.log('degree:',degree)        
          console.log('role:',role)
          console.log('skill:',skills)
          if (checkValue === 'BE') {
            setdegree(console.log('BE'));                 
         }
        }     
  }
  return (
    <div>
      <Stack direction="row" paddingTop={10} spacing={3} paddingBottom={10} justifyContent='center'>
        <Item >
          <Typography variant="h6" component="p" paddingBottom={2}>
            <span className='Edit'>Edit User</span>
          </Typography>
          <br />
          <label htmlFor="">
            First Name <span className="astrix">*</span>
          </label>
          {error &&name.trim()==='' &&  (
            <Typography variant="caption" color="error" marginLeft={3}>
              Enter first name
            </Typography> 
          )}
          <br />
          <TextField
            placeholder='First Name'
            id="fullWidth"
            onChange={(e)=>{
              setname(e.target.value)
            }}
            value={name}
            required
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
           
            {error && dob.trim()===''&&(
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Your date Of birth
                </Typography> 
            )}
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DatePicker']} >
                    <DatePicker localeText="DD/MM/YYYY" className="date"  onChange={handleclock}/>
                </DemoContainer>
            </LocalizationProvider>
            <br />
            <label htmlFor="">Password</label>
            {error&&Password.trim()==='' && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Your Password
                </Typography> 
            )} <br />
             <FormControl sx={{ m: 0, width: '63.5ch' }} variant="outlined">
          
          <OutlinedInput
            id="outlined-adornment-password"
            onChange={(e)=>setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"
          /></FormControl>
<br />
            <label htmlFor="">
                Gender <span className="astrix">*</span>
            </label>
            {error && genders.trim()===''&& (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select your Gender
                </Typography> 
            )}
            <Box sx={{ width: 500 }}>
    <FormControl fullWidth required>
      <InputLabel >Select your gender</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={genders}
        onChange={ Handlegene}          
      >
        <MenuItem value={'Male'}>Male</MenuItem>
        <MenuItem value={'Female'}>Female</MenuItem>
        <MenuItem value={'Others'}>Others</MenuItem>
      </Select>
    </FormControl>
  </Box>
            <br />

            <label htmlFor="">
                Department <span className="astrix">*</span>
            </label>
            {error && department.trim()===''&& (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Choose Your Department
                </Typography> 
            )}
            <Box sx={{ width: 500 }}>
      <FormControl fullWidth>
        <InputLabel >Department</InputLabel>
        <Select       
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          onChange={ handledepartment}          
        >
          <MenuItem value={'Maths'}>Maths</MenuItem>
          <MenuItem value={'Physics'}>Physics</MenuItem>
          <MenuItem value={'Chemistry'}>Chemistry</MenuItem>
          </Select>
        </FormControl>
       </Box>
            <br />

            <label htmlFor="">
                Degrees <span className="astrix">*</span>
            </label>
            {error&& checkerror &&(
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select Your Degree
                </Typography> 
            )}
            <br />
            <Box sx={{ width: 500 }}>
   <FormControl fullWidth>             
      <div className="check">
         <Checkbox value="BE"  onChange={Handlecheck} />
         <label>BE</label>

         <Checkbox value="ME"  onChange={Handlecheck} />
         <label>ME</label>

         <Checkbox value="Bsc"  onChange={Handlecheck} />
         <label>Bsc</label>

         <Checkbox value="Msc"  onChange={Handlecheck} />
         <label>Msc</label>

         <Checkbox value="MBA"  onChange={Handlecheck} />
         <label>MBA</label>
         <br />
         <br />
      </div>
   </FormControl>
</Box>
            <label htmlFor="">
                Status<span className="astrix">*</span>
            </label>
            {error && selection.trim()===''&& (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select Status
                </Typography> 
            )}
            <br />
            <div>
            <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
                checked={selection === "active"} 
                onChange={() => handleSelectionChange("active")} 
            />
            <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="Inactive"
                checked={selection === "inactive"} 
                onChange={() => handleSelectionChange("inactive")}
            />
        </div>
            <Button variant="contained" sx={{ marginTop: 10 ,marginLeft:25}} onClick={handleclick}>
                SUBMIT
            </Button>
        </Item>

        <Item sx={{paddingTop:10.1}}> 
            <label htmlFor="">Last Name <span className='astrix'>*</span></label> {error&&lastname.trim()==='' && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Last name
                </Typography> 
            )}<br />

            <TextField required id="fullWidth" placeholder='Last Name' onChange={(e)=>setlastname(e.target.value)} sx={{
                width: 500,
                maxWidth: '100%',       
                paddingBottom:3             
                  
            }}/> 
            <br />
            <label htmlFor="">Email Id <span className='astrix'>*</span></label> {error && email.trim()==='' && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Email ID
                </Typography> 
            )}
            <br />
            <TextField placeholder='Email Id' required id="fullWidth" onChange={(e)=>setemail(e.target.value)} sx={{
                width: 500,
                maxWidth: '100%', 
                paddingBottom:3,  
                marginTop:1    
            }}/> <br />
            
            <label className='confirm'>Confirm Password <span className='astrix'>*</span></label>
            {error&&confirmpassword.trim()==='' && (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Confirm Password
                </Typography> 
            )} 
            {error&&confirmpassword.trim()===''&& confirmpassword!==Password&&(
                <label htmlFor="" className='error'>Enter Correct Password</label>            
            )}<br />

<FormControl sx={{ m: 0, width: '63.5ch' ,marginTop:'-1ch'}} variant="outlined">
          
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                onChange={(e)=>{
                     setconfirmpassword(e.target.value)
                }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"
          /></FormControl>
         <br />
         <label htmlFor="">Roles <span className='astrix'>*</span></label>
         {error && role.trim()===''&&(
                <Typography variant="caption" color="error" marginLeft={3}>
                    Select Roles
                </Typography> 
            )}<br />
         <Box sx={{ width: 500 }}>
    <FormControl fullWidth>
    <InputLabel >Select your Roles</InputLabel>
      <Select
        placeholder='Select your role'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={role}
        onChange={ Handlerole}          
      >
        <MenuItem value={'Developer'}>Developer</MenuItem>
        <MenuItem value={'Designer'}>Designer</MenuItem>
        <MenuItem value={'trainee'}>trainee</MenuItem>
      </Select>
    </FormControl>
  </Box>
        <br />
        
        <label htmlFor="">Skills <span className='astrix'>*</span></label>
        {error && skills.trim()==='' &&(
                <Typography variant="caption" color="error" marginLeft={3}>
                   Select Your Skills
                </Typography> 
            )}<br />
            <Box sx={{ width: 500 }}>
    <FormControl fullWidth>
    <InputLabel >Select your Skills</InputLabel>

      <Select
        placeholder='Select your Skills'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={skills}
        onChange={ Handleskill}    
        required      
      >
        <MenuItem value={'Reactjs'}>Reactjs</MenuItem>
        <MenuItem value={'Django'}>Django</MenuItem>
        <MenuItem value={'Dotnet'}>Dotnet</MenuItem>
      </Select>
    </FormControl>
  </Box>
        <br />
        <label htmlFor="">Address <span className='astrix'>*</span></label>
        {error && address.trim()===''&& (
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Your Address
                </Typography> 
            )}<br />
        <TextField
            
            aria-placeholder="Address"
            multiline
            onChange={(e)=>setaddress(e.target.value)}
            rows={4}
            placeholder='Address'
            required
            sx={{
                m: 0, width: '64ch' ,paddingBottom:3
            }}
        />    
      <br />
      <label htmlFor="">Additional Info <span className='astrix'>*</span></label>
      {error  && additionalinfo.trim()===''&&(
                <Typography variant="caption" color="error" marginLeft={3}>
                    Enter Additional Information
                </Typography> 
            )}
    <br />
    <TextField
            id="outlined-multiline-static"
            aria-placeholder="Additional Info"
            multiline
            onChange={(e)=>setadditionalinfo(e.target.value)}
            rows={4}
            placeholder='Additional Info'
            sx={{
                m: 0, width: '64ch' ,
            }}
        />
    </Item>

      </Stack>
    </div>
  );
}

export default Right;