import React from 'react'
import LoginForm from './components/LoginForm'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

const LoginPage: React.FC = () => {
  return (
    <Grid container minHeight="100vh">
      <Grid xs={5} sx={{ backgroundColor: '#f7f7f7', p: '50px' }}>
        <Typography component="h1" variant="h6">
          Login Page
        </Typography>
        <Typography component="h1" variant="h6">
          login to your account
        </Typography>
      </Grid>
      <Grid
        xs={7}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <LoginForm />
      </Grid>
    </Grid>
  )
}

export default LoginPage
