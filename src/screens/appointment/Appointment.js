import React from 'react'
import { Box, Button, Card, CardContent, Paper, Typography, TextField, InputLabel, Select, MenuItem } from '@mui/material'
import Modal from 'react-modal'

const Appointment = ({ openAppointmentModal, setOpenAppointmentModal }) => {
    return (
        <>
            <Modal isOpen={openAppointmentModal} >
                <Card component={Paper} className='AppModal'>
                    <CardContent className='p-0'>
                        <Box py={4} px={2} sx={{ backgroundColor: 'purple' }}>
                            <Typography className='text-white' sx={{ fontSize: "1.5rem" }}>Book An Appointment</Typography>
                        </Box>
                        <Box p={2}>
                            <form>
                                <Box mb={2}>
                                    <InputLabel>Doctor Name</InputLabel>
                                    <TextField type="text" variant='standard' />
                                </Box>
                                <Box mb={2}>
                                    <InputLabel>Date</InputLabel>
                                    <TextField type="date" variant='standard' />
                                </Box>
                                <Box mb={2}>
                                    <InputLabel>Time Slot</InputLabel>
                                    <Select sx={{ width: "15rem", maxWidth: "100%" }}>
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value="9AM - 10AM">9AM - 10AM</MenuItem>
                                        <MenuItem value="10AM - 11AM">10AM -11AM</MenuItem>
                                        <MenuItem value="11AM - 12AM">11AM - 12AM</MenuItem>
                                        <MenuItem value="12PM - 1PM">12PM - 1PM</MenuItem>
                                        <MenuItem value="1Pm - 2PM">1Pm - 2PM</MenuItem>
                                        <MenuItem value="2PM - 3PM">2Pm - 3PM</MenuItem>
                                        <MenuItem value="3PM - 4PM">3Pm - 4PM</MenuItem>
                                        <MenuItem value="4PM - 5PM">4Pm - 5PM</MenuItem>
                                    </Select>
                                </Box>
                                <Box mb={2}>
                                    <InputLabel>Medical History</InputLabel>
                                    <TextField type='text' multiline rows={2} variant='standard' />
                                </Box>
                                <Box mb={2}>
                                    <InputLabel>Symptoms</InputLabel>
                                    <TextField type='text' multiline rows={2} variant='standard' />
                                </Box>
                                <Box mb={2}>
                                    <Button type="submit" variant='contained' color='primary' onClick={() => setOpenAppointmentModal(false)}>Rate Appointment</Button>
                                </Box>
                            </form>
                        </Box>
                    </CardContent>
                </Card>
            </Modal>
        </>
    )
}

export default Appointment