import { useState } from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Divider } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 180,
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
    },
    iconButton: {
        padding: theme.spacing(1),
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    cardActions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    typography: {
        fontWeight: 600,
    }
}))

export const ItemCount = ({ stock, initial, onAdd }) => {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(initial)

    const increaseQuantity = () => {
        if (parseInt(quantity) < stock)
            setQuantity(parseInt(quantity) + 1)
    }

    const decreaseQuantity = () => {
        if (parseInt(quantity) > 1)
            setQuantity(parseInt(quantity) - 1)
    }

    const addToCart = () => onAdd(quantity)

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228383.jpg"
                title="Muzzarella"
            />
            <CardContent>
                <Typography align="center" variant="h4" className={classes.typography}>
                    Muzzarella
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography> */}

            </CardContent>
            <Divider />
            <CardActions className={classes.cardActions}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={0} variant="outlined">
                            <IconButton onClick={decreaseQuantity} className={classes.iconButton} aria-label="decrease">
                                <RemoveIcon />
                            </IconButton>
                            {/* <Divider className={classes.divider} orientation="vertical" /> */}
                            <InputBase
                                inputProps={
                                    { style: { textAlign: 'center' } }
                                }
                                value={quantity}
                                readOnly
                            />
                            {/* <Divider className={classes.divider} orientation="vertical" /> */}
                            <IconButton onClick={increaseQuantity} className={classes.iconButton} aria-label="increase" >
                                <AddIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" disableElevation onClick={addToCart}>
                            Add to cart
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}