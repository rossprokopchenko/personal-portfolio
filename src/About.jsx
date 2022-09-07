import React from 'react';
import background from './tluMAD.png';
import avatar from './avatar.jpg'
import { Typography, Avatar } from '@mui/material';
import './About.css';

function About() {
    return (
        <div id='about' classname="about" style={{height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <div className="about-left">
                <Avatar
                    src={avatar}
                    sx={{ width: 400, height: 400 }}
                />
                <Typography variant='h3' style={{marginTop: '25px', color: 'lightgray'}}>Ross Prokopchenko</Typography>
                <Typography variant='h4' style={{color: 'lightgray'}}>FULL STACK DEVELOPER</Typography>
            </div>
            <div className="about-right">
                <Typography variant='h5' style={{color: 'white', padding: '30px', lineHeight: '1.6'}}>
                    My name is Ross Prokopchenko and I will graduate York University in December 2022 with a Bachelors of Arts degree in Computer Science. 
                    Programming has been extremely inspiring to me in high school since I believe once you take apart any problem step by step and start from the beginning, you can understand anything.
                    My love for knowledge and problem-solving has led me to where I am today and I am looking forward to expanding my experience and career growth in software development. 
                </Typography>
            </div>
            
        </div>
    );
}

export default About;