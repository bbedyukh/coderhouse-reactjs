import { Box, Typography, Link, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: 'auto',
    },
}))

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
    const classes = useStyles()
    return (
        <Box className={classes.footer}>
            <Divider />
            <Box sx={{ bgcolor: 'primary.main', p: 6 }} component='footer'>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                    color='textPrimary'
                    component='p'>
                    Acá debería ir el footer.
                </Typography>
                <Copyright />
            </Box>
        </Box>
    )
}
