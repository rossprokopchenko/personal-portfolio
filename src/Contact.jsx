import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Paper, TextField, ThemeProvider, createTheme, Typography, Alert, Collapse } from '@mui/material';
import { ConstructionRounded, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

//#1e1e1e


function Contact() {
    const defaultContact = {
        name: '',
        title: '',
        text: ''
    }

    const [contact, setContact] = useState(defaultContact);
    const [open, setOpen] = useState(false);
    const [warning, setWarning] = useState(false);
    const [errorTimer, setTimer] = useState(0);

    const theme = createTheme({
        typography: {
            fontFamily: [
            'Montserrat',
            'Black',
            ].join(','),
        },});

    const handleSubmit = () => {
        if(contact.text == '') {
            console.log('empty text');
            return;
        }

        setOpen(true);
        
        if(errorTimer == 0 && !warning) {
            startTimer(45);

            /*
            emailjs.send('service_xmxvu9m', 'template_e38gu1j', contact, '3TijilKWK583dTRbQ')
            .then(function(response) {
                console.log('CONTACT EMAIL SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('CONTACT EMAIL FAILED...', error);
            });
            */
        } else {
            setWarning(true);
        }
    };

    const handleNameChange = (e) => {
        setContact(prevState => {
            let newContact = Object.assign({}, prevState);
            newContact.name = e.target.value;
            return newContact;
        })
    }

    const handleTitleChange = (e) => {
        setContact(prevState => {
            let newContact = Object.assign({}, prevState);
            newContact.title = e.target.value;
            return newContact;
        })
    }

    const handleTextChange = (e) => {
        setContact(prevState => {
            let newContact = Object.assign({}, prevState);
            newContact.text = e.target.value;
            return newContact;
        })
    }

    const startTimer = (duration, display) => {
        var timer = duration, seconds;
        var timerInt = setInterval(function () {
            seconds = parseInt(timer % 60, 10);

            setTimer(seconds);

            if (--timer < 0) {
                timer = duration;
                setWarning(false);
                setOpen(false);
                clearInterval(timerInt);
            }
        }, 1000);
    }

    return (
        <Box id="contact" sx={{background: 'lightgray', p: '50px', flexDirection: 'column'}} display='flex' justifyContent='center' alignItems='center'>

            <ThemeProvider theme={theme}>
                <Typography variant='h2' sx={{fontWeight: 'bolder', mb: '50px'}}>
                    CONTACT
                </Typography>
            </ThemeProvider>
            
            <Paper elevation={5} sx={{p: '15px', background: 'white', height: '420px', minWidth: '300px', maxWidth: '512px'}}>
                <Box sx={{height: '100%', position: 'relative'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <TextField
                        id="outlined-name"
                        label="Name"
                        defaultValue=""
                        variant='filled'
                        sx={{mr: '7px', float: 'left', width: '70%'}}
                        color='info'
                        onChange={handleNameChange}
                        />
                        <TextField
                        id="outlined-title"
                        label="Title"
                        defaultValue=""
                        sx={{ml: '7px', float: 'right', width: '100%'}}
                        variant='filled'
                        onChange={handleTitleChange}
                        />
                    </Box>

                    <Box sx={{mt: '15px'}}>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Text"
                        placeholder="Your text here..."
                        multiline
                        rows={8}
                        sx={{width: '100%'}}
                        variant='outlined'
                        onChange={handleTextChange}
                        />
                    </Box>

                    <Collapse in={open} sx={{mt: '5px', mb: '20px' }}>
                        {!warning ? 
                        
                        <Alert onClose={() => {setOpen(false)}}>Your message has been successfully sent to my email!</Alert>
                        : <Alert severity='error' onClose={() => {setOpen(false)}}>Please wait {errorTimer > 0 ? errorTimer + " seconds" : ''} before sending another email</Alert>}
                    </Collapse>
                
                    <Box sx={{position: 'absolute', bottom: '0',width: '100%'}} display='flex' justifyContent='center'>
                        <Button variant='contained' color='success' sx={{width: '110px'}} endIcon={<Send />} onClick={handleSubmit}>Send</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Contact;