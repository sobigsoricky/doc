import React, { useState } from 'react'
import { Box, Button, Paper, Select, MenuItem, Typography, InputLabel, Card, CardContent, } from '@mui/material'
import { Star } from '@mui/icons-material'
import Modal from 'react-modal'
import DoctorDetails from './DoctorDetails'
import Appointment from '../appointment/Appointment'

const DoctorList = () => {
    const [openDetailsModal, setOpenDetailsModal] = useState(false)
    const [openAppointmentModal, setOpenAppointmentModal] = useState(false)

    const doctorList = [
        {
            id: 'doc-1',
            name: 'Ocean Garner',
            speciality: 'PULMONOLOGIST',
            rating: 5
        },
        {
            id: 'doc-2',
            name: 'Kennan Hess',
            speciality: 'GENERAL_PHYSICIAN',
            rating: 5
        },
        {
            id: 'doc-3',
            name: 'Blossoms Valentine',
            speciality: 'PULMONOLOGIST',
            rating: 5
        }
    ]

    const [filteredSpeciality, setFilteredSpeciality] = useState(doctorList)



    const handleSpecialityChange = (e) => {
        const { value } = e.target
        const filteredData = doctorList.filter(e => e.speciality === value)
        if (filteredData && filteredData !== null && filteredData !== undefined && filteredData !== "" && filteredData.length > 0) {
            setFilteredSpeciality(filteredData)
        } else {
            setFilteredSpeciality(doctorList)
        }
    }


    return (
        <>
            <Box my={5}>
                <InputLabel>Select Speciality</InputLabel>
                <Select className='filter' onChange={handleSpecialityChange}>
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="PULMONOLOGIST">PULMONOLOGIST</MenuItem>
                    <MenuItem value="GENERAL_PHYSICIAN">GENERAL_PHYSICIAN</MenuItem>
                </Select>
            </Box>
            <Box>
                {
                    filteredSpeciality.map(i => <Box mb={2} p={2} component={Paper}>
                        <Typography gutterBottom sx={{ fontSize: "1.5rem" }}>Doctor Name: {i.name}</Typography>
                        <Typography>Speciality: {i.speciality}</Typography>
                        <Typography>Rating: <Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /><Star sx={{ color: "orange" }} /></Typography>
                        <Box mt={2}>
                            <Button variant='contained' color='primary' onClick={() => setOpenAppointmentModal(true)}>Book Appointment</Button>
                            <Button variant='contained' className='bg-success ms-sm-3 ms-0 mt-3 mt-sm-0' onClick={() => setOpenDetailsModal(true)}>View Details</Button>
                        </Box>
                    </Box>)
                }
            </Box>
            <DoctorDetails openDetailsModal={openDetailsModal} setOpenDetailsModal={setOpenDetailsModal} />
            <Appointment openAppointmentModal={openAppointmentModal} setOpenAppointmentModal={setOpenAppointmentModal} />
        </>
    )
}

export default DoctorList