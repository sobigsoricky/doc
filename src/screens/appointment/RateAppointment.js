import React, { useState } from 'react'
import { Box, Button, Typography, Paper, Card, CardContent, TextField, InputLabel } from '@mui/material'
import { Star } from '@mui/icons-material'
import Modal from 'react-modal'

const RateAppointment = ({ open, setOpen }) => {
    return (
        <>
            <Modal isOpen={open}>
                <Card className='ratingModal' component={Paper} onClick={() => setOpen(false)}>
                    <CardContent className='p-0'>
                        <Box py={4} px={2} sx={{ backgroundColor: 'purple' }}>
                            <Typography className='text-white' sx={{ fontSize: "1.5rem" }}>Rate An Appointment</Typography>
                        </Box>
                        <Box p={2}>
                            <Box mb={2}>
                                <InputLabel>Comment</InputLabel>
                                <TextField type='text' multiline rows={4} variant='standard' />
                            </Box>
                            <Box>
                                <Typography>Rating: <Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /></Typography>
                            </Box>
                            <Box mt={2}>
                                <Button type="submit" variant='contained' color='primary'>Rate Appointment</Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Modal>
        </>
    )
}

export default RateAppointment