import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { RegistrationForm } from '@/app/(auth)/register/components/RegisterForm/RegisterForm'

const RegisterPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {/* Registration form component */}
        <RegistrationForm />
      </Box>
    </Container>
  )
}

export default RegisterPage
