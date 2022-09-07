import React from 'react';
import { Box, Paper, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import { ReactComponent as GithubLogo } from './resources/githubBlack.svg';
import { ReactComponent as YoutubeLogo } from './resources/youtube.svg';
import { Assignment } from '@mui/icons-material';

function Portfolio() {

    return (
        <Box sx={{background: 'lightgray', pb: '80px'}}>
            <Box id='portfolio' sx={{display: 'flex', flexDirection: 'row', p: '80px 60px'}}>

            <Paper elevation={5} sx={{p: '10px', height: '256px', width: '512px', position: 'relative'}}>
                <Box sx={{height: '100%'}}>
                    <Typography variant='h5'>
                        Smart Shoppers
                    </Typography>
                    <Typography sx={{mt: '10px'}} variant='body1'>
                        This Java shopping system project uses Java Swing for the GUI system. 
                        It is designed by using a csvloader Java library to load CSV files as database files for users, 
                        stores, categories and items. There are multiple GUI interractions depending on what the logged in user's 
                        permissions are.
                    </Typography>
                    <Box sx={{position: 'absolute', bottom: '15px', width: '95%'}} justifyContent='center'>
                    <Button sx={{mr: '7px', width: '170px'}} href="https://www.youtube.com/watch?v=_23mU4sXV8s" target="_blank" variant="outlined" startIcon={<YoutubeLogo height='24px' width='24px' />}>Video Demo</Button>
                    <Button sx={{ml: '7px', width: '170px'}} href="https://github.com/rossprokopchenko/SmartShoppers" target="_blank" variant="outlined" endIcon={<GithubLogo height='24px' width='24px' />}>GitHub Code</Button>
                </Box>
                </Box>
            </Paper>

            <Paper elevation={5} sx={{ml: '20px', p: '10px', height: '256px', width: '512px', position: 'relative'}}>
                <Typography variant='h5'>
                    Spotilyzer
                </Typography>
                <Typography sx={{mt: '10px'}} variant='body1'>
                    Made with React JS. Lets user log into their Spotify account through&nbsp;
                    <a href="https://www.spotilyzer.com" target='_blank'>spotilyzer.com</a>, 
                    upon login the user is able to look at their profile statistics (top 5 tracks, top 5 artists, recently played tracks), 
                    they may use a track generator, their saved albums and recommended albums based on their profile info. 
                    All data is fetched from the Spotify API.
                </Typography>
                <Box sx={{position: 'absolute', bottom: '15px', width: '95%'}} justifyContent='center'>
                    <Button sx={{mr: '7px', width: '170px'}} variant="outlined" startIcon={<YoutubeLogo height='24px' width='24px' />}>Video Demo</Button>
                    <Button sx={{ml: '7px', width: '170px'}} href="https://github.com/rossprokopchenko/Spotilyzer" target="_blank" variant="outlined" endIcon={<GithubLogo height='24px' width='24px' />}>GitHub Code</Button>
                </Box>
                
            </Paper>

            <Paper elevation={5} sx={{ml: '20px', p: '10px', height: '256px', width: '512px', position: 'relative'}}>
                <Typography variant='h5'>
                    Rosklex Discord Bot
                </Typography>
                <Typography sx={{mt: '10px'}} variant='body1'>
                    A Discord Bot designed in Java with an SQLite database to store user’s game profile information. 
                    This bot lets users play time-based dungeons and connect4.
                </Typography>
                <Box sx={{position: 'absolute', bottom: '15px', width: '95%'}} justifyContent='center'>
                    <Button sx={{width: '170px'}} href="https://github.com/rossprokopchenko/RosklexBot" target="_blank" variant="outlined" endIcon={<GithubLogo height='24px' width='24px' />}>GitHub Code</Button>
                </Box>
                
            </Paper>
            </Box>

            <Button id='resume' variant='outlined' color='success' sx={{fontSize: '35px', height: '128px', width: '286px', borderRadius: '20px'}} startIcon={<Assignment sx={{mr: '20px', transform: 'scale(3)'}} />}>RESUME</Button>
        </Box>
    );
}

export default Portfolio;