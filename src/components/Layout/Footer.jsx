import { Box, Typography, Link, Divider } from '@mui/material'

const Copyright = () => {
    return (
        <Typography variant='body2' color='textPrimary' align='center'>
            <Link color='inherit' href='https://material-ui.com/'>
                Don Boedo
            </Link>{' '}
            &reg; {new Date().getFullYear()}
        </Typography>
    )
}

export const Footer = () => {
    return (
        <Box sx={{ marginTop: 'auto' }}>
            <Divider />
            <Box sx={{ bgcolor: 'primary.main', p: 6 }} component='footer'>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Copyright />
            </Box>
        </Box>
    )
}
