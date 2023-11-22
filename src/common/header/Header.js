import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Tabs, Tab, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Modal from 'react-modal';
import Logo from '../../assets/logo.jpeg'
import './Header.css'
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';

const Header = ({ handleUserAuth, isLogin, setOpen, open }) => {
    const [createNewAcc, setCreateNewAcc] = useState('1');

    const handleChange = (event, newValue) => {
        setCreateNewAcc(newValue);
    };

    return (
        <>
            <header>
                <nav className='navbar p-0'>
                    <a href="/" className='navbar-brand'>
                        <img src={Logo} alt="logo" className='img-fluid logo' />
                    </a>
                    <div style={{ flexGrow: 1 }} />
                    <Button variant='contained' color={isLogin ? 'secondary' : 'primary'} onClick={handleUserAuth}>{isLogin ? 'Logout' : 'Login'}</Button>
                </nav>
            </header>
            <Modal
                isOpen={open}
            >
                <Card className='authCard'>
                    <CardContent className='p-0'>
                        <Box py={4} px={2} sx={{ backgroundColor: 'purple' }}>
                            <Typography className='text-white' sx={{ fontSize: "1.5rem" }}>Authentication</Typography>
                        </Box>
                        <Box p={2}>
                            <TabContext value={createNewAcc}>
                                <Box>
                                    <TabList onChange={handleChange}>
                                        <Tab label="LOGIN" value="1" />
                                        <Tab label="REGISTER" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Login setOpen={setOpen} />
                                </TabPanel>
                                <TabPanel value="2">
                                    <Register />
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </CardContent>
                </Card>
            </Modal>
        </>
    )
}

export default Header