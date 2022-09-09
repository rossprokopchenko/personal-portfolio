import React from 'react';
import background from './tluMAD.png';
import avatar from './avatar.jpg'
import { Typography, Avatar, ThemeProvider, createTheme, Box } from '@mui/material';
import './About.css';

function About() {
    const nameTheme = createTheme({
        typography: {
          fontFamily: [
            'Montserrat',
            'Black',
          ].join(','),
        },});

    const textTheme = createTheme({
        typography: {
          fontFamily: [
            'Open Sans',
            'light',
          ].join(','),
        },});

    return (
        <div id='about' className="about" style={{minHeight: '100vh', maxHeight: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Box className="about-left" style={{display: 'flex', flexDirection: 'column', width: '50%', flexBasis: '500px', flexGrow: '1'}} p={4} justifyContent='center' alignContent='center'>
                    <Avatar
                        src={avatar}
                        sx={{ boxShadow: '5px 5px 8px #000000', width: 400, height: 400, ml: 'auto', mr: 'auto'}}
                    />
                    <ThemeProvider theme={nameTheme}>
                        <Typography variant='h3' style={{marginTop: '25px', color: 'lightgray', fontWeight: 'bolder'}}>Ross Prokopchenko</Typography>
                    </ThemeProvider>
                    
                    <Typography variant='h4' style={{color: 'lightgray', fontStyle: 'italic'}}>SOFTWARE DEVELOPER</Typography>
                </Box>
                <ThemeProvider theme={textTheme}>
                <Box className="about-right" style={{display: 'flex', width: '50%', flexBasis: '500px', flexGrow: '1', verticalAlign: 'middle'}} alignItems='center'>
                    <Typography variant='h5' style={{color: 'lightgray', padding: '30px', lineHeight: '1.6', verticalAlign: 'middle'}}>
                        My name is Ross Prokopchenko and I will graduate York University in December 2022 with a Bachelors of Arts degree in Computer Science. 
                        Programming has been extremely inspiring to me in high school since I believe once you take apart any problem step by step and start from the beginning, you can understand anything.
                        My love for knowledge and problem-solving has led me to where I am today and I am looking forward to expanding my experience and career growth in software development. 
                    </Typography>
                </Box>
                </ThemeProvider>
        </div>
    );
}

export default About;