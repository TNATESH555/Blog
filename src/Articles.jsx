import React from 'react';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css'; 

function Articles() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',textAlign:'justifyContent',
        color: theme.palette.text.secondary,
      }));
  return (
    
<Box sx={{ flexGrow: 1, width:'310vh'}}>
    <Grid container spacing={2} className='body'>
      <Grid item xs={8}>
        <Item className='wat'>
      <Link href='/brief'>
        <h4>
          <li>Bengaluru, a city of more than 13 million people, was facing a daily water deficit of 
          500 million liters (roughly 132 million gallons) — almost 20% of its total demand.</li>
        </h4>
      </Link>
      <img src="drops.webp" alt="Bengaluru water problem" className='water'/>
      <p>Wealthy Indians have better access to water. Ranganathan also highlighted class politics behind water distribution in Bengaluru.

        "Water is not only geographically differentiated, but also highly class- and caste-stratified in the city," she said.

        Members of the upper and middle classes, which tend to be predominantly upper caste, live in approved residential areas, 
        and receive water supply from the Kavery river. Other areas depend almost entirely on groundwater and tankers, Ranganathan said.

        And left in the lurch are people like Chitra Jayaraju, who say the water issues will persist regardless of who is in charge.

        "My neighbors and I have approached the local politicians of both the BJP and Congress party," she said, "but haven't been able to get our water woes addressed."
      </p>
  </Item>
  <Item className='waterss'>
   
      <Link href='/ai'>
        <h4>
          <li>How Will Artificial Intelligence Affect Jobs 2024-2030</li>
        </h4>
      </Link>
      <img src="robot-working.jpg" alt="Bengaluru water problem" className='waters'/>
      <p>Like any controversial subject, there will always be people who are for it, and those that are against it. Artificial Intelligence is no different. In fact, as new AI tools are introduced, and the news around them grows, so the division between the two camps will grow with it. Many market research analysts say that AI has the potential to bring about numerous positive changes in society, including enhanced productivity, improved healthcare, and increased access to education. But we need to adapt right now.</p>
      </Item>
      </Grid>      
    </Grid>
</Box>
  )
}

export default Articles;