import { Grid, Box, Container, Typography } from '@material-ui/core'
import {ItemCount} from './ItemCount.jsx'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    typography: {
        fontWeight: 600,
    }
}))

export const ItemListContainer = () => {
    const classes = useStyles()
    const onAdd = (quantity) => console.log(`Cantidad de unidades a agregar: ${quantity}`)

    return (
        <Container className={classes.root}>
            <Typography align="center" variant="h1" className={classes.typography}>
                Pizzas
            </Typography>
            <Box my={3}>
                <Grid
                    justifyContent="center"
                    container
                    spacing={3}
                >
                    <Grid item>
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
