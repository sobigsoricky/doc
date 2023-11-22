import React from 'react'
import { Box, Button, TextField, Typography, } from '@mui/material'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('First name is required.'),
        email: yup.string().email('Enter valid Email.').required('Email is required.'),
        password: yup.string().min(8, 'Password must have minimum 8 characters.').max(12, 'Password must have maximum 12 characters.'),
        phone: yup.string().matches(/^[0-9]{10}$/, 'Enter a valid 10-digit mobile number').required('Mobile number is required'),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const handleRegister = () => {

    }

    return (
        <>
            <Box>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Box mb={2}>
                        <TextField type="text" label="First Name" variant='standard' name="firstName" fullWidth {...register('firstName')} />
                        {
                            errors && errors.firstName && errors.firstName.message ? <Typography className='text-danger'>{errors.firstName.message}</Typography> : null
                        }
                    </Box>
                    <Box mb={2}>
                        <TextField type="text" label="Last Name" variant='standard' name="lastName" fullWidth {...register('lastName')} />
                        {
                            errors && errors.lastName && errors.lastName.message ? <Typography className='text-danger'>{errors.lastName.message}</Typography> : null
                        }
                    </Box>
                    <Box mb={2}>
                        <TextField type="email" label="Email" variant='standard' name="email" fullWidth {...register('email')} />
                        {
                            errors && errors.email && errors.email.message ? <Typography className='text-danger'>{errors.email.message}</Typography> : null
                        }
                    </Box>
                    <Box mb={2}>
                        <TextField type="password" label="Password" variant='standard' name="password" fullWidth {...register('password')} />
                        {
                            errors && errors.password && errors.password.message ? <Typography className='text-danger'>{errors.password.message}</Typography> : null
                        }
                    </Box>
                    <Box mb={2}>
                        <TextField type="tel" label="Mobile No" variant='standard' name="phone" fullWidth {...register('phone')} />
                        {
                            errors && errors.phone && errors.phone.message ? <Typography className='text-danger'>{errors.phone.message}</Typography> : null
                        }
                    </Box>
                    <Box className="d-flex justify-content-center">
                        <Button type="submit" variant='contained' color='primary'>REGISTER</Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Register