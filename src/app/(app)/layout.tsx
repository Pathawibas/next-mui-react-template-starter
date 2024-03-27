import { Box } from '@mui/material'
import React from 'react'
import Sidebar from './components/Sidebar'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      {children}
    </Box>
  )
}

export default AppLayout
