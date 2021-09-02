import React from 'react'
import Carousel from './Carousel.jsx'
import Cards from './Cards.jsx'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    containerPadding: {
        padding: '2rem 1rem'
    },
    h1: {
        textAlign: 'center'
    }
}));
export default function Content() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth={false} disableGutters={true}>
                <Carousel />
                <Divider />
            </Container>
            <Container maxWidth="lg" className={classes.containerPadding}>
                <Grid container>
                    <Grid item xs={12}>
                        {/* <Typography variant="h1">Build accessible React apps with speed</Typography> */}
                        {/* <h1 className={classes.h1}>Build accessible React apps with speed</h1> */}
                    </Grid>
                </Grid>
                <Cards />
            </Container>
        </div>
    )
}
