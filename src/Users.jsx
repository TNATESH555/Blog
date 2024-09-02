import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './App.css'; 
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'email', headerName: 'EmailID', type: 'number', width: 110, editable: true },
  { field: 'dateofbirth', headerName: 'Date of birth', type: 'number', width: 110, editable: true },
  { field: 'Status', headerName: 'status', type: 'number', width: 110, editable: true },
  {
    field: 'links',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => (
      <div className='deletebut'>
        
          <Link to={`/users/${params.row.id}`} className='buttons'>
          <Button variant="contained" color="success">EDIT</Button>
          </Link>            
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => ConfirmAction(params.row.id)} >DELETE</Button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function ConfirmAction(id) {
  var result = window.confirm("Are you sure you want to proceed?");
  if (result) { 
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    alert("Action Cancelled!");
  }
}

export default function DataGridDemo() {
  
  return (
    <Box sx={{ height: 400, width: '70%',marginTop:'05%', marginLeft:'17%'}}>
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >

     
<Stack spacing={6} direction="row" className='button'>
      <Link to={'./addusers'}><Button variant="contained">Add User +</Button></Link>
    </Stack>
<TextField
  InputProps={{
    startAdornment: (                            
      <Button ><SearchIcon style={{ color: 'gray'}} />  </Button>                     
    )
  }}
  hiddenLabel
  placeholder='Search'
  variant="filled"
  size="small" className='search' 

/>

     
    </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}