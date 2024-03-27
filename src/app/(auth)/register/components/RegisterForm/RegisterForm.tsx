'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Button, Box, Typography } from '@mui/material'
import { registrationFormSchema } from './schema'
import { IRegisterFormValues } from './interface'
import { useMutation } from '@tanstack/react-query'
import { registerUser } from '@/services/registerService'

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: zodResolver(registrationFormSchema),
  })

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      // Handle successful registration (e.g., navigate to login page or show a success message)
    },
    onError: (error: any) => {
      // Handle registration error (e.g., show an error message)
      console.error(error)
    },
  })

  const handleSummit: SubmitHandler<IRegisterFormValues> = async (data) => {
    console.log(data)
    mutation.mutate(data)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleSummit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        label="Email Address"
        {...register('email')}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Password"
        type="password"
        {...register('password')}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={Boolean(errors.confirmPassword)}
        helperText={errors.confirmPassword?.message}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Submitting...' : 'Sign Up'}
      </Button>
      {mutation.isError ? (
        <Typography color="error" sx={{ mt: 2 }}>
          {mutation.error.message}
        </Typography>
      ) : null}
    </Box>
  )
}

export default RegistrationForm
