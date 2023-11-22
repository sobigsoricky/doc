import React, { useState } from 'react'
import { Box, Button, Typography, Paper, Card, CardContent, TextField, InputLabel } from '@mui/material'
import { Star } from '@mui/icons-material'
import Modal from 'react-modal'
import RateAppointment from '../appointment/RateAppointment'

const BookAppointment = () => {
    const [open, setOpen] = useState(false)
    const appointment = [
        {
            id: 'app-1',
            name: 'Hermoin Kelly',
            date: '21-08-2023',
            symptoms: '',
            priorMedicalHistory: ""
        },
        {
            id: 'app-1',
            name: 'Hermoin Kelly',
            date: '25-08-2023',
            symptoms: '',
            priorMedicalHistory: ""
        },
        {
            id: 'app-1',
            name: 'Hermoin Kelly',
            date: '29-08-2023',
            symptoms: '',
            priorMedicalHistory: ""
        }
    ]

    return (
        <>
            <Box>
                {
                    appointment.map(i => <Box p={2} mb={2} component={Paper}>
                        <Typography sx={{ fontSize: "1.5rem" }} gutterBottom>Dr.: {i.name}</Typography>
                        <Typography>Date: {i.date}</Typography>
                        <Typography>Symptoms:</Typography>
                        <Typography>Prior medical history:</Typography>
                        <Box mt={2}>
                            <Button variant='contained' color='primary' onClick={() => setOpen(true)}>Star Appointment</Button>
                        </Box>
                    </Box>)
                }
            </Box>
            <RateAppointment open={open} setOpen={setOpen} />
        </>
    )
}

export default BookAppointment