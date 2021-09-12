import React from 'react'
import { Box, Typography, Link} from '@material-ui/core'

const Copyright = () => {
    return (
      <Typography variant="body2" color="textPrimary" align="center">
        <Link color="inherit" href="https://material-ui.com/">
          Don Boedo 
        </Link>
        {' '} &reg; {' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

export const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="textPrimary"
                component="p"
            >
                Acá debería ir el footer.
            </Typography>
            <Copyright />
        </Box>
    )
}
