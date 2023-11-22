import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const Login = ({ setOpen }) => {

    const schema = yup.object().shape({
        email: yup.string().email('Enter valid Email.').required('Email is required.'),
        password: yup.string().min(8, 'Password must have minimum 8 characters.').max(12, 'Password must have maximum 12 characters.'),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const handleLogin = () => {
        setOpen(false)
    }

    return (
        <>
            <Box>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                    <Box className="d-flex justify-content-center">
                        <Button type="submit" variant='contained' color='primary'>LOGIN</Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Login