import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Container, Tabs, Tab, Typography, Grid } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Home.css'
import DoctorList from '../doctorList/DoctorList';
import BookAppointment from '../doctorList/BookAppointment';

const Home = ({ isLogin }) => {
    const [selectedTab, setSelectedTab] = useState('1')

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setSelectedTab(newValue);
    };

    return (
        <>
            <main>
                <section id="home">
                    <Container maxWidth="xxl" className='p-0'>
                        <Box>
                            <TabContext value={selectedTab}>
                                <Box>
                                    <TabList onChange={handleChange}>
                                        <Tab label="Doctors" value="1" />
                                        <Tab label="Appointment" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Grid container justifyContent="center">
                                        <Grid item xs={12} sm={8} md={6}>
                                            <DoctorList />
                                        </Grid>
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="2">
                                    {
                                        !isLogin ? <Typography align='center'>Login to see appointment</Typography> : <Box>
                                            <BookAppointment />
                                        </Box>
                                    }
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Home