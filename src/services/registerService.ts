// src/services/registerService.ts
import axios from 'axios'
import { IRegisterFormValues } from '@/app/(auth)/register/components/RegisterForm/interface'

interface IRegisterResponse {
  id: number
  email: string
}

export const registerUser = async (
  formData: IRegisterFormValues
): Promise<IRegisterResponse> => {
  try {
    const response = await axios.post('/api/register', formData)
    return response.data
  } catch (error) {
    // Handle errors (e.g., network errors, response error statuses)
    throw error
  }
}
