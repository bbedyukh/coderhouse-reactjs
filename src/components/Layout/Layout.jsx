import { Box } from '@mui/material'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            style={{ minHeight: '100vh' }}>
            <Header />
            {children}
            <Footer />
        </Box>
    )
}
