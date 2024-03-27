'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
} from '@mui/material'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'

// Define the form's schema using Zod
const loginFormSchema = z.object({
  phone: z.string().min(10, { message: 'Invalid phone number' }),
})

// Define the form's data type based on the schema
type LoginFormValues = z.infer<typeof loginFormSchema>

// Placeholder login function (should actually implement login logic)
const loginUser = async (data: LoginFormValues) => {
  console.log('Login data:', data)
  // Replace with actual login request
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  })

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      // Handle successful login
    },
    onError: (error: any) => {
      // Handle login error
      console.error(error)
    },
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    mutation.mutate(data)
  }

  return (
    <Box sx={{ mt: 1, maxWidth: 360 }}>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Typography component="p" color="text.secondary">
        Please enter your details to sign in
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 1 }}
      >
        <TextField
          color="primary"
          margin="normal"
          required
          fullWidth
          label="Phone Number"
          {...register('phone')}
          autoComplete="tel"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+66</InputAdornment>
            ),
          }}
          error={Boolean(errors.phone)}
          helperText={errors.phone?.message}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Loading...' : 'Sign In'}
        </Button>
        {mutation.isError && (
          <Typography color="error" sx={{ mt: 2 }}>
            {mutation.error instanceof Error
              ? mutation.error.message
              : 'An error occurred'}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default LoginForm
