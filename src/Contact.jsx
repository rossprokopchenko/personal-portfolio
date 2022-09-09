import React from 'react';
import { Box, Button, Paper, TextField, ThemeProvider, createTheme, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';

//#1e1e1e

function Contact() {
    const theme = createTheme({
        typography: {
            fontFamily: [
            'Montserrat',
            'Black',
            ].join(','),
        },});

    return (
        <Box id="contact" sx={{background: 'lightgray', p: '80px', flexDirection: 'column'}} display='flex' justifyContent='center' alignItems='center'>

            <ThemeProvider theme={theme}>
                <Typography variant='h2' sx={{fontWeight: 'bolder', mb: '50px'}}>
                    CONTACT
                </Typography>
            </ThemeProvider>
            
            <Paper elevation={5} sx={{p: '15px', background: 'white', height: '370px', width: '512px'}} justifyContent='center' alignItems='center'>
                <Box sx={{height: '100%', position: 'relative'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <TextField
                        id="outlined-name"
                        label="Name"
                        defaultValue=""
                        variant='filled'
                        sx={{mr: '7px', float: 'left', width: '70%'}}
                        color='info'
                        />
                        <TextField
                        id="outlined-title"
                        label="Title"
                        defaultValue=""
                        sx={{ml: '7px', float: 'right', width: '100%'}}
                        variant='filled'
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
                        />
                    </Box>
                
                    <Box sx={{position: 'absolute', bottom: '0', width: '100%'}} display='flex' justifyContent='center'>
                        <Button variant='contained' color='success' endIcon={<Send />}>Send</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Contact;