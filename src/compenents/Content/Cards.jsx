import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    iconBackground: {
        backgroundColor: '#e8eaf6',
        padding: '1rem',
        borderRadius: '1rem'
    }
}));


export default function Cards() {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.root}
            spacing={3}
        >
            <Grid item xs={12} sm={3}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <LocalShippingIcon className={classes.iconBackground} fontSize="large" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="textPrimary">Pedidos rápidos</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="textSecondary">Pagá online o al recibir tu pedido.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <PhoneIcon className={classes.iconBackground} fontSize="large" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="textPrimary">Pedí por teléfono</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="textSecondary">Sucursal Boedo | 4931-6898</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <WhatsAppIcon className={classes.iconBackground} fontSize="large" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="textPrimary">Pedí por WhatsApp</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="textSecondary">Hace tu pedido al +54 9 1122 3344</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <WhatsAppIcon className={classes.iconBackground} fontSize="large" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="textPrimary">Pedí por WhatsApp</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="textSecondary">Hace tu pedido al +54 9 1122 3344</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}