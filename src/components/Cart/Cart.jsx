import { useState, useEffect } from 'react'
import { useCartContext } from '../../contexts/CartContext'
import { styled } from '@mui/material/styles'
import {
    Paper,
    Typography,
    Box,
    Avatar,
    Grid,
    IconButton,
    Tab,
    InputBase,
    Divider,
    Button,
    Stack,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { TabPanel, TabContext, TabList } from '@mui/lab/'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { grey } from '@mui/material/colors'

const AntTabs = styled(TabList)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#1890ff',
    },
})

const AntTab = styled(props => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        minWidth: 0,
        [theme.breakpoints.up('sm')]: {
            minWidth: 0,
        },
        fontSize: 18,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(1),
        color: 'rgba(0, 0, 0, 0.85)',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&.Mui-selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
        },
    })
)

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        padding: theme.spacing(1),
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
}))

export const Cart = () => {
    const classes = useStyles()
    const [totalPrice, setTotalPrice] = useState(0)
    const { cart, totalCount, increaseQuantity, decreaseQuantity, deleteItem } =
        useCartContext()
    const [tab, setTab] = useState('1')

    const handleChange = (event, newValue) => {
        setTab(newValue)
    }

    useEffect(() => {
        let total = 0
        cart.forEach(i => (total += i.quantity * i.item.price))
        setTotalPrice(total)
    }, [cart])

    return (
        <>
            <Grid>
                <Paper>
                    <Box pt={5} px={10}>
                        <Box sx={{ bgcolor: '#fff' }}>
                            <TabContext value={tab}>
                                <AntTabs
                                    onChange={handleChange}
                                    aria-label='Tabs del carrito'>
                                    <AntTab
                                        label={`Carrito (${totalCount})`}
                                        value='1'
                                    />
                                    {/* <AntTab label='Guardados (0)' value='2' /> */}
                                </AntTabs>
                                <TabPanel value='1'>
                                    {cart.length === 0 ? (
                                        <Box py={5}>
                                            <Typography
                                                variant='h5'
                                                sx={{
                                                    textAlign: 'center',
                                                    color: grey[600],
                                                }}>
                                                Tu carrito está vacío
                                            </Typography>
                                            <Typography
                                                variant='body1'
                                                sx={{
                                                    textAlign: 'center',
                                                    color: grey[600],
                                                }}>
                                                ¿No sabés qué comprar? ¡Miles de
                                                productos te esperan!
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <>
                                            {cart.map(product => (
                                                <Box
                                                    py={2}
                                                    key={product.item.id}>
                                                    <Grid
                                                        container
                                                        alignItems='center'
                                                        columnSpacing={5}>
                                                        <Grid
                                                            item
                                                            xs={2}
                                                            sm={1}>
                                                            <Link
                                                                to={`/item/${product.item.id}`}>
                                                                <Avatar
                                                                    alt={
                                                                        product
                                                                            .item
                                                                            .title
                                                                    }
                                                                    src={
                                                                        product
                                                                            .item
                                                                            .pictureUrl
                                                                    }
                                                                    sx={{
                                                                        width: 64,
                                                                        height: 64,
                                                                    }}
                                                                    variant='rounded'
                                                                />
                                                            </Link>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={10}
                                                            sm={6}>
                                                            <Typography
                                                                variant='h6'
                                                                color='initial'>
                                                                {
                                                                    product.item
                                                                        .title
                                                                }
                                                            </Typography>
                                                            <Typography
                                                                variant='body1'
                                                                color='initial'
                                                                noWrap
                                                                sx={{
                                                                    overflow:
                                                                        'hidden',
                                                                    textOverflow:
                                                                        'ellipsis',
                                                                    width: '100%',
                                                                }}>
                                                                {
                                                                    product.item
                                                                        .description
                                                                }
                                                            </Typography>
                                                            <Button
                                                                variant='text'
                                                                color='secondary'
                                                                size='small'
                                                                onClick={() =>
                                                                    deleteItem(
                                                                        product
                                                                    )
                                                                }>
                                                                Eliminar
                                                            </Button>
                                                        </Grid>
                                                        <Grid
                                                            container
                                                            item
                                                            xs={12}
                                                            sm={2}
                                                            justifyContent='center'>
                                                            <Paper
                                                                className={
                                                                    classes.paper
                                                                }
                                                                elevation={0}
                                                                variant='outlined'>
                                                                <IconButton
                                                                    onClick={() =>
                                                                        decreaseQuantity(
                                                                            product
                                                                        )
                                                                    }
                                                                    className={
                                                                        classes.iconButton
                                                                    }
                                                                    aria-label='decrease'
                                                                    disabled={
                                                                        product
                                                                            .item
                                                                            .stock ===
                                                                            0 ||
                                                                        product.quantity ===
                                                                            1
                                                                    }
                                                                    size='large'>
                                                                    <RemoveIcon />
                                                                </IconButton>
                                                                <InputBase
                                                                    inputProps={{
                                                                        style: {
                                                                            textAlign:
                                                                                'center',
                                                                        },
                                                                    }}
                                                                    value={
                                                                        product
                                                                            .item
                                                                            .stock ===
                                                                        0
                                                                            ? 'Sin stock'
                                                                            : product.quantity
                                                                    }
                                                                    readOnly
                                                                />
                                                                <IconButton
                                                                    onClick={() =>
                                                                        increaseQuantity(
                                                                            product
                                                                        )
                                                                    }
                                                                    className={
                                                                        classes.iconButton
                                                                    }
                                                                    aria-label='increase'
                                                                    disabled={
                                                                        product
                                                                            .item
                                                                            .stock <=
                                                                            0 ||
                                                                        product.quantity ===
                                                                            product
                                                                                .item
                                                                                .stock
                                                                    }
                                                                    size='large'>
                                                                    <AddIcon />
                                                                </IconButton>
                                                            </Paper>
                                                            <Typography
                                                                variant='caption'
                                                                sx={{ pt: 1 }}>
                                                                {`${product.item.stock} disponibles`}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            sm={3}>
                                                            <Typography
                                                                variant='h5'
                                                                color='initial'
                                                                align='right'>
                                                                $
                                                                {product.item
                                                                    .price *
                                                                    product.quantity}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    {cart.length > 0 && (
                                                        <Divider
                                                            sx={{ py: 2 }}
                                                        />
                                                    )}
                                                </Box>
                                            ))}
                                            {cart.length > 0 && (
                                                <Stack>
                                                    <Box py={4}>
                                                        <Typography
                                                            variant='h5'
                                                            color='initial'
                                                            align='right'>
                                                            Total ${totalPrice}
                                                        </Typography>
                                                    </Box>
                                                    <Divider sx={{ py: 1 }} />
                                                    <Box
                                                        py={4}
                                                        textAlign='right'>
                                                        <Button
                                                            variant='contained'
                                                            color='secondary'
                                                            disableElevation>
                                                            Continuar compra
                                                        </Button>
                                                    </Box>
                                                </Stack>
                                            )}
                                        </>
                                    )}
                                </TabPanel>
                                {/* <TabPanel value='2'>Item Two</TabPanel> */}
                            </TabContext>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}
