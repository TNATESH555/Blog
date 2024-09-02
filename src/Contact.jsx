import React, { useState } from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Contact() {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            name.trim() === '' ||
            email.trim() === '' ||
            message.trim() === '' ||
            !email.endsWith('@gmail.com')
        ) {
            setError(true);
            setSuccess(false);
        } else {
            setError(false);
            setSuccess(true);
            console.log('Name:', name, 'Email:', email, 'Message:', message);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item className='contactgrid'>
            <h1>CONTACT</h1>
            <form onSubmit={handleSubmit}>
                <label>NAME</label>
                <input type="text" name="fname" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                {error && name.trim() === '' && <label className="error">Please enter your name</label>}
                <br />
                <label>EMAIL</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                {error && !email.endsWith('@gmail.com')&& (
                    <label className="error">Please enter a valid email address</label>
                )}
                <br />
                <div className='messbox'>
                <label>MESSAGE</label>
                <textarea name="message" maxlength="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <br />
                {error && message.trim() === '' && <label className="error">Please enter your message</label>}
                <br />
                </div>          
                {success && <label className="success">Form submitted successfully!</label>}
                <br />
                
                <button type="submit">SUBMIT</button>
            </form>
            </Item>
        </Grid>          
      </Grid>
    </Box>
    );
}

export default Contact;