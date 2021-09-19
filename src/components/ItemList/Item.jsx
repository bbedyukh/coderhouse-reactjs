import { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    Typography,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Divider,
    Snackbar,
    Paper,
    InputBase,
    IconButton,
    CardActionArea,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 350,
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
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    cardActions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    typography: {
        fontWeight: 600,
    },
}))

export const Item = ({ item, stock, initial }) => {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(initial)
    const [inStock, setInStock] = useState(stock)
    const [notification, setNotification] = useState({ open: false, text: '' })

    const increaseQuantity = () => {
        if (quantity < inStock) setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const addToCart = () => {
        setInStock(inStock - quantity)
        setQuantity(initial)
        setNotification({
            open: true,
            text: `Se ${quantity > 1 ? 'han' : 'ha'} agregado ${quantity} ${
                item.category
            } de ${item.title} al carrito.`,
        })
    }

    const closeNotification = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setNotification(prevState => ({
            ...prevState,
            open: false,
            text: '',
        }))
    }

    const Alert = props => {
        return <MuiAlert elevation={6} variant='filled' {...props} />
    }

    return (
        <>
            <Snackbar
                open={notification.open}
                autoHideDuration={4000}
                onClose={closeNotification}
            >
                <Alert onClose={closeNotification} severity='success'>
                    {notification.text}
                </Alert>
            </Snackbar>
            <Card className={classes.card}>
                <CardActionArea component={Link} to={`/item/${item.id}`}>
                    <CardMedia
                        className={classes.media}
                        image={item.pictureUrl}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography
                            align='center'
                            variant='h5'
                            className={classes.typography}
                            noWrap
                        >
                            {item.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <Divider />
                <CardActions className={classes.cardActions}>
                    <Grid
                        container
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}
                    >
                        <Grid item xs={6}>
                            <Paper
                                className={classes.paper}
                                elevation={0}
                                variant='outlined'
                            >
                                <IconButton
                                    onClick={decreaseQuantity}
                                    className={classes.iconButton}
                                    aria-label='decrease'
                                    disabled={inStock <= 0 || quantity === 1}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <InputBase
                                    inputProps={{
                                        style: { textAlign: 'center' },
                                    }}
                                    value={inStock <= 0 ? 'No stock' : quantity}
                                    readOnly
                                />
                                <IconButton
                                    onClick={increaseQuantity}
                                    className={classes.iconButton}
                                    aria-label='increase'
                                    disabled={
                                        inStock <= 0 || quantity === inStock
                                    }
                                >
                                    <AddIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='contained'
                                color='secondary'
                                disableElevation
                                onClick={addToCart}
                                disabled={inStock <= 0}
                            >
                                Add to cart
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </>
    )
}
