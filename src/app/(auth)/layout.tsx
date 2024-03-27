import Box from '@mui/material/Box'

interface LoginLayoutProps {
  children: React.ReactNode
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        component={'main'}
      >
        {children}
      </Box>
    </>
  )
}

export default LoginLayout
