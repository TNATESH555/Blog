import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css'; 


function Ai() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        textAlign: 'justify',
        color: theme.palette.text.secondary,
      }));
      
      return (
        
      <Box sx={{ flexGrow: 1,height:'100vh', width:'310vh'}}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
          
            <h1>
              How Will Artificial Intelligence Affect Jobs 2024-2030
            </h1>
      
          <img src="robot-working.jpg" alt="Bengaluru water problem" className='water_big'/>
          <p>Like any controversial subject, there will always be people who are for it, and those that are against it. Artificial Intelligence is no different. In fact, as new ai tools are introduced, and the news around them grows,
             so the division between the two camps will grow with it. Many market research analysts say that AI has the potential to bring about numerous positive changes in society, including enhanced productivity, improved healthcare, and increased access to education. But we need to adapt right now.

Others will say, mostly those working in human work types of jobs that are manually repetitive, that ai and robotics is a disruptive force and when it comes to the future of jobs it merely serves to steal jobs.
 But robots and ai technologies can and will create a great many new vocations and help solve complex problems and make our daily lives easier and more convenient. The jury is not yet out on this, but the leaning is more toward ai being a positive force rather than a negative one.

How will AI affect jobs and the economy?
McKinsey global institute says that at the global average level of adoption and absorption and advances in ai implied by their simulation, AI has the profound impact to deliver additional global economic activity of around $13 trillion
 in the foreseeable future and by 2030, or about 16% higher cumulative GDP compared with today. This amounts to 1.2% additional GDP growth per year. If delivered,
 this impact would compare well with that of other general-purpose technologies through history. This will mainly come from substitution of labor by automation and increased innovation in products and services.

The same report went on to say that By 2030, the average simulation shows that some 70% of companies will have embraced the ai revolution and adopted at  least one type of AI technology but that less than half will have fully absorbed 
the five categories. Forbes say ai has the potential to be among the most disruptive technologies across global economies that we will ever develop.

How will artificial intelligence affect society and future?
Forbes says that the future of AI brings endless possibilities and applications that will help simplify our lives to a great extent. It will help shape the future and destiny of humanity positively, whilst Bernard Marr & Co says
 that the transformative impact of artificial intelligence on our society will have far-reaching economic, legal, political and regulatory implications on all types of jobs and industries that we need to be discussing and preparing for.
  Others in the know say that AI has the potential to bring about numerous positive changes in society both now and
 in the future, including enhanced productivity, improved healthcare, and increased access to education. AI-powered technologies can also help solve complex problems and make our daily lives easier and more convenient.</p>
          </Item>
          </Grid>      
        </Grid>
      </Box>
)}

export default Ai