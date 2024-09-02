import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function Home() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
  <Box sx={{ flexGrow: 1,height:'100vh', width:'310vh'}}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>
        <h1>WELCOME TO MY BLOG</h1>
       <h2>WELCOME TO MY BLOG</h2>
       <h3>WELCOME TO MY BLOG</h3>
       </Item>
      </Grid>      
    </Grid>
</Box>
  )
}

export default Home