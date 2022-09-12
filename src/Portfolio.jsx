import React from 'react';
import { Box, Paper, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import { ReactComponent as GithubLogo } from './resources/githubBlack.svg';
import { ReactComponent as YoutubeLogo } from './resources/youtube.svg';
import { Assignment } from '@mui/icons-material';

function Portfolio() {

    const textTheme = createTheme({
        typography: {
          fontFamily: [
            'Open Sans',
            'light',
          ].join(','),
        },});

    const nameTheme = createTheme({
        typography: {
            fontFamily: [
            'Montserrat',
            'Black',
            ].join(','),
        },});

    return (
        <Box id='portfolio' sx={{background: 'lightgray', p: '80px 60px'}}>

            <ThemeProvider theme={nameTheme}>
                <Typography variant='h2' sx={{fontWeight: 'bolder', mb: '60px'}}>
                    PORTFOLIO
                </Typography>
            </ThemeProvider>

            <Box sx={{display: 'flex', flexDirection: 'row', mb: '60px', flexWrap: 'wrap'}} justifyContent='center'>

            <Paper elevation={5} sx={{p: '10px', minHeight: '290px', maxHeight: '100%', minWidth: '400px', maxWidth: '400px', position: 'relative', m: '7px'}}>
                <Box sx={{height: '100%'}}>
                    <ThemeProvider theme={nameTheme}>
                        <Typography variant='h5' sx={{fontWeight: 'bolder'}}>
                            Smart Shoppers
                        </Typography>
                    </ThemeProvider>
                    
                    <ThemeProvider theme={textTheme}>
                        <Typography sx={{mt: '10px'}} variant='body1'>
                            This Java shopping system project uses Java Swing for the GUI system. 
                            It is designed by using a csvloader Java library to load CSV files as database files for users, 
                            stores, categories and items. There are multiple GUI interractions depending on what the logged in user's 
                            permissions are.
                        </Typography>
                    </ThemeProvider>
                    
                    <Box sx={{position: 'absolute', bottom: '15px', width: '95%'}} justifyContent='center'>
                    <Button sx={{mr: '7px', width: '170px'}} href="https://www.youtube.com/watch?v=_23mU4sXV8s" target="_blank" variant="outlined" startIcon={<YoutubeLogo height='24px' width='24px' />}>Video Demo</Button>
                    <Button sx={{ml: '7px', width: '170px'}} href="https://github.com/rossprokopchenko/SmartShoppers" target="_blank" variant="outlined" endIcon={<GithubLogo height='24px' width='24px' />}>GitHub Code</Button>
                </Box>
                </Box>
            </Paper>

            <Paper elevation={5} sx={{p: '10px', height: '290px', minWidth: '400px', maxWidth: '400px', position: 'relative', m: '7px'}}>
                <ThemeProvider theme={nameTheme}>
                    <Typography variant='h5' sx={{fontWeight: 'bolder'}}>
                        Spotilyzer
                    </Typography>
                </ThemeProvider>
                
                <ThemeProvider theme={textTheme}>
                    <Typography sx={{mt: '10px'}} variant='body1'>
                        Made with React JS. Lets user log into their Spotify account through&nbsp;
                        <a href="https://www.spotilyzer.com" target='_blank'>spotilyzer.com</a>, 
                        upon login the user is able to look at their profile statistics (top 5 tracks, top 5 artists, recently played tracks), 
                        they may use a track generator, their saved albums and recommended albums based on their profile info. 
                        All data is fetched from the Spotify API.
                    </Typography>
                </ThemeProvider>
                
                <Box sx={{position: 'absolute', bottom: '15px', width: '95%'}} justifyContent='center'>
                    <Button sx={{mr: '7px', width: '170px'}} variant="outlined" startIcon={<YoutubeLogo height='24px' width='24px' />}>Video Demo</Button>
                    <Button sx={{ml: '7px', width: '170px'}} href="https://github.com/rossprokopchenko/Spotilyzer" target="_blank" variant="outlined" endIcon={<GithubLogo height='24px' width='24px' />}>GitHub Code</Button>
                </Box>
                
            </Paper>

            <Paper elevation={5} sx={{p: '10px', height: '290px', minWidth: '400px', maxWidth: '400px', position: 'relative', m: '7px'}}>
                <ThemeProvider theme={nameTheme}>
                    <Typography variant='h5' sx={{fontWeight: 'bolder'}}>
                        Rosklex Discord Bot
                    </Typography>
                </ThemeProvider>

                <ThemeProvider theme={textTheme}>
                    <Typography sx={{mt: '10px'}} variant='body1'>
                        A bot that uses the Discord API with Java, an SQLite database was used to store users' game profile information. 
                        This bot lets users play time-based dungeons and connect4.
                    </Typography>
                </ThemeProvider>
                
                <Box sx={{position: 'absolute', bottom: '15px', width: '95%'}} justifyContent='center'>
                    <Button sx={{width: '170px'}} href="https://github.com/rossprokopchenko/RosklexBot" target="_blank" variant="outlined" endIcon={<GithubLogo height='24px' width='24px' />}>GitHub Code</Button>
                </Box>
                
            </Paper>
            </Box>

            <hr />

            <ThemeProvider theme={nameTheme}>
                    <Typography variant='h6' sx={{fontStyle: 'italic', mt: '30px'}}>
                        Please see resumé for a specific rundown of my skills
                    </Typography>
                </ThemeProvider>
            <Box sx={{display: 'flex', mt: '60px'}} justifyContent='center'>
                
                <Button id='resume' variant='outlined' color='success' sx={{fontSize: '35px', height: '128px', width: '286px', borderRadius: '20px'}} startIcon={<Assignment sx={{mr: '20px', transform: 'scale(3)'}} />} href='Ross_Prokopchenko_Resume_LaTeX.pdf' download>RESUMÉ</Button>
            </Box>
        </Box>
    );
}

export default Portfolio;