import React from 'react';
import { Typography, ThemeProvider, createTheme, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { School, InvertColors, GolfCourse, Dvr, AirportShuttle } from '@mui/icons-material';

function Career() {
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
        <Box id="career" style={{color: 'lightgray', background: 'black'}} alignItems='center'>
            <ThemeProvider theme={nameTheme}>
                <Typography variant="h2" sx={{pt: '100px', fontWeight: 'bolder'}}>
                    CAREER
                </Typography>
            </ThemeProvider>
            
            <Timeline position='alternate' sx={{ p: '80px 50px'}}>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2015 - June 2018</Typography>
                        </ThemeProvider>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'purple'}}>
                                <School sx={{ml: '-1px'}} />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ mt: '22px', py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Huron Heights Secondary School
                        </Typography>
                        
                        <Typography variant='subtitle1' sx={{color: 'darkgray', fontWeight: 'bold'}}>
                            Kitchener, Ontario
                        </Typography>
                        <ThemeProvider theme={textTheme}>
                            <Typography>
                                Member of Grade 11 and Grade 12 swim team, OFSAA qualifier both years
                            </Typography>
                        </ThemeProvider>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2017 - June 2018</Typography>
                        </ThemeProvider>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: '#0066FF'}}>
                                <InvertColors sx={{ml: '0px'}} />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{mt: '40px', py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Canadian Water Conditioning
                        </Typography>
                        <Typography sx={{color: 'darkgray', fontWeight: 'bold'}}>
                            Kitchener, Ontario
                        </Typography>
                        <ThemeProvider theme={textTheme}>
                            <Typography variant='body1'>
                                Given basic labour tasks such as cleaning up water filter parts, preparing softener tanks for delivery, 
                                cleaning up the shop and rarely assisted in service calls
                            </Typography>
                        </ThemeProvider>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2018 - Dec. 2022</Typography>
                        </ThemeProvider>
                        
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{background: 'red', transform: 'scale(1.2)'}}>
                                <School sx={{ml: '-1px'}}/>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ mt: '20px', py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            York University
                        </Typography>
                        <Typography sx={{color: 'darkgray', fontWeight: 'bold'}}>
                            Toronto, Ontario
                        </Typography>
                        <ThemeProvider theme={textTheme}>
                            <Typography variant='body1'>
                                Bachelors of Arts in Computer Science
                            </Typography>
                        </ThemeProvider>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>April 2019 - Aug. 2021</Typography>
                        </ThemeProvider>
                        
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: '#249225'}}>
                                <GolfCourse />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ mt: '85px', py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Oakdale Golf and Country Club
                        </Typography>
                        <Typography sx={{color: 'darkgray', fontWeight: 'bold'}}>
                            Toronto, Ontario
                        </Typography>
                        <ThemeProvider theme={textTheme}>
                            <Typography variant='body1'>
                                Gained skills in grounds maintenance, communication and leadership as we often worked in groups of 2-8 people. 
                                I also operated heavy John Deere machinery and kept up with basic labour tasks that were needed to be done around 
                                the golf course
                            </Typography>
                        </ThemeProvider>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2021 - Dec. 2021</Typography>
                        </ThemeProvider>
                        
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'white', transform: 'scale(1.2)'}}>
                                <Dvr color='success' />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ mt:'65px', py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            KEV Group
                        </Typography>
                        <Typography sx={{color: 'darkgray', fontWeight: 'bold'}}>
                            Remote (office in Toronto, Ontario)
                        </Typography>
                        <ThemeProvider theme={textTheme}>
                            <Typography variant='body1'>
                                Worked with ASP.NET core applications (C#, HTML, JavaScript, CSS) in Visual Studio 2017/2019 
                                with assistance of Microsoft SQL Server Management Studio, SourceTree, Azure DevOps, Azure KeyVault, Azure Cosmos DB
                            </Typography>
                        </ThemeProvider>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>May 2022 - August 2022</Typography>
                        </ThemeProvider>
                       
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'orange'}}>
                                <AirportShuttle />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ mt: '65px', py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            RoadRunner Transport
                        </Typography>
                        <Typography sx={{color: 'darkgray', fontWeight: 'bold'}}>
                            Ottawa, Ontario
                        </Typography>
                        <ThemeProvider theme={textTheme}>
                            <Typography variant='body1'>
                                Loaded service van with Amazon packages at Amazon station warehouse, used Amazon Flex app,
                                drove to required location based on dedicated route, delivered packages to doorsteps with a smile (anywhere from 100 - 200 stops per day)
                            </Typography>
                        </ThemeProvider>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>

            <Box sx={{background: 'black', height: '1px'}}>

            </Box>
        </Box>
    )
}

export default Career;