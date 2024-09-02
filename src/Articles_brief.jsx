import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css'; 


function Articles_brief() {
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',textAlign: 'justify',
  color: theme.palette.text.secondary,
}));

return (
  
<Box sx={{ flexGrow: 1,height:'100vh', width:'310vh'}}>
  <Grid container spacing={2}>
    <Grid item xs={8}>
      <Item>
    
      <h1>
        Bengaluru, a city of more than 13 million people, was facing a daily water deficit of 
        500 million liters (roughly 132 million gallons) — almost 20% of its total demand.
      </h1>
   
    <img src="drops.webp" alt="Bengaluru water problem" className='water_big'/>
    <p>Wealthy Indians have better access to water. Ranganathan also highlighted class politics behind water distribution in Bengaluru.

      "Water is not only geographically differentiated, but also highly class- and caste-stratified in the city," she said.

      Members of the upper and middle classes, which tend to be predominantly upper caste, live in approved residential areas, 
      and receive water supply from the Kavery river. Other areas depend almost entirely on groundwater and tankers, Ranganathan said.

      And left in the lurch are people like Chitra Jayaraju, who say the water issues will persist regardless of who is in charge.

      "My neighbors and I have approached the local politicians of both the BJP and Congress party," she said, "but haven't been able to get our water woes addressed."
      With Bengaluru grappling with a water crisis and the Cauvery and groundwater resources going dry, industries, institutions, and residents of India’s Silicon Valley have been affected alike.

Dr T V Ramachandra, Coordinator, Energy and Wetlands Research Group, Indian Institute of Science, Bengaluru, spoke to The Indian Express on the prevailing water crisis in Bengaluru and what led to the scarcity in the region that has caused severe distress to its residents.

Ramachandra also explains why the water crisis can get worse than South Africa’s Cape Town and how the Bengaluru Water Supply and Sewerage Board (BWSSB)’s actions have only proved to be a disaster in managing water. Excerpts:
    </p>
 
    </Item>
    </Grid>      
  </Grid>
</Box>
  )
}

export default Articles_brief