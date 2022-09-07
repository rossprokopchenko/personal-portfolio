import React from 'react';
import { ReactComponent as GithubLogo } from './resources/github.svg';
import { ReactComponent as LinkedInLogo } from './resources/linkedin.svg';
import { ReactComponent as InstagramLogo } from './resources/instagram.svg';
import { Typography, Box, IconButton } from '@mui/material';

function Footer() {

    return (
        <Box sx={{padding: '30px 60px',
            background: '#212529',
            width: '100%',
            textAlign: 'center'}}>
            <Typography variant='h4' sx={{color: 'white'}}>Ross Prokopchenko</Typography>
            <hr style={{color: 'white'}}></hr>
            <Typography variant='subtitle1' sx={{color: 'lightgray'}}>Socials</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '5px'}}>
                <IconButton href='https://www.linkedin.com/in/ross-prokopchenko-4802a2127/' target='_blank' sx={{height: '30px', width: '30px', padding: '0px'}}>
                    <LinkedInLogo width='30px' height='30px' />
                </IconButton>
                <IconButton href='https://github.com/rossprokopchenko' target='_blank' sx={{marginLeft: '4px', height: '30px', width: '30px', padding: '0px'}}>
                    <GithubLogo width='30px' height='30px' />
                </IconButton>
                <IconButton href='https://www.instagram.com/rostiku_/' target='_blank' sx={{marginLeft: '4px', height: '30px', width: '30px', padding: '0px'}}>
                    <InstagramLogo width='30px' height='30px' />
                </IconButton>
                
            </Box>
        </Box>
    );
}

export default Footer; 