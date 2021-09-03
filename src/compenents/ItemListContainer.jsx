import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
    },
}))

export const ItemListContainer = (props) => {
    const { message } = props
    const classes = useStyles();

    return (
        <div>
            <Grid
                className={classes.root}
                justifyContent="center"
                container
            >
                <Grid item>
                    <Typography variant="h1">{message}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
