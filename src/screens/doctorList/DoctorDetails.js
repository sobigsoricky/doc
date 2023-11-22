import React, { useState } from 'react'
import { Box, Button, Paper, Select, MenuItem, Typography, InputLabel, Card, CardContent, } from '@mui/material'
import { Star } from '@mui/icons-material'
import Modal from 'react-modal'

const DoctorDetails = ({ openDetailsModal, setOpenDetailsModal }) => {
    return (
        <>
            <Modal isOpen={openDetailsModal}>
                <Card className='authCard2' component={Paper} onClick={() => setOpenDetailsModal(false)}>
                    <CardContent className='p-0'>
                        <Box py={4} px={2} sx={{ backgroundColor: 'purple' }}>
                            <Typography className='text-white' sx={{ fontSize: "1.5rem" }}>Doctor Details</Typography>
                        </Box>
                        <Box p={2}>
                            <Typography gutterBottom>Dr: Alexis Rodrigues</Typography>
                            <Typography>Total Experience: 21 Years</Typography>
                            <Typography>Speciality: Cardiologist</Typography>
                            <Typography>Date of Birth: 21/05/1995</Typography>
                            <Typography>City: San</Typography>
                            <Typography>Mobile No.: 7854651236</Typography>
                            <Typography>Rating: <Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /></Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Modal>
        </>
    )
}

export default DoctorDetails