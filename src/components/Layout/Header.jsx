import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    // IconButton,
    Stack,
    Container,
    Avatar,
    Divider,
    LinearProgress,
} from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import RestaurantLogo from '../../assets/images/logo.png'
// import { SwitchCustom } from '../Customs/SwitchCustom'
// import { SearchCustom } from '../Search/Search'
import { CartWidget } from '../Cart/CartWidget'
import { CartDrawer } from '../Cart/CartDrawer'
import { Menu } from '../Menu'
import { useCartContext } from '../../contexts/CartContext'
import { useLoadingContext } from '../../contexts/LoadingContext'
// import { Mock } from '../../utils/Mock'
// import { getFirestore } from '../../services/getFirebase'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [cartDrawer, setCartDrawer] = useState(false)
    const isMenuOpen = Boolean(anchorEl)
    const { isLoading } = useLoadingContext()
    const { cart, totalCount, setTotalCount } = useCartContext()

    const handleOpen = () => {
        setCartDrawer(!cartDrawer)
    }

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
    }

    const onHandleClose = () => {
        setAnchorEl(null)
    }

    // const importProducts = () => {
    //     const db = getFirestore()
    //     const productsCollection = db.collection('products')
    //     Mock.forEach(product => {
    //         productsCollection
    //             .add(product)
    //             .then(result => console.log(result))
    //             .catch(err => console.error(err))
    //     })
    // }

    useEffect(() => {
        let totalQuantity = 0
        cart?.forEach(i => (totalQuantity += i.quantity))
        setTotalCount(totalQuantity)
    }, [cart, setTotalCount])

    return (
        <AppBar
            position='static'
            elevation={0}
            color='primary'
            enableColorOnDark>
            <Container>
                <Toolbar>
                    <Link to='/'>
                        <Avatar alt='Restaurant' src={RestaurantLogo} />
                    </Link>
                    <Box flexGrow='1' sx={{ marginLeft: 2 }}>
                        <Typography variant='h6'>Restaurant</Typography>
                    </Box>

                    {/* <Box display={{ xs: 'inline', sm: 'none' }}>
                        <IconButton
                            color='inherit'
                            aria-label='menu'
                            size='large'>
                            <MenuIcon />
                        </IconButton>
                    </Box> */}

                    {/* <Box display={{ xs: 'none', sm: 'inline' }}> */}
                    <Stack direction='row' alignItems='center' spacing={3}>
                        {/* <SearchCustom /> */}
                        {/* <SwitchCustom /> */}
                        <Button
                            color='inherit'
                            onClick={handleClick}
                            endIcon={<ArrowDropDownIcon />}>
                            Carta digital
                        </Button>
                        <Menu
                            isMenuOpen={isMenuOpen}
                            anchorEl={anchorEl}
                            onHandleClose={onHandleClose}
                        />
                        <CartWidget
                            quantity={totalCount}
                            handleClick={() => setCartDrawer(!cartDrawer)}
                        />
                        {/*<Button
                            variant='contained'
                            color='secondary'
                            onClick={importProducts}
                            disableElevation>
                            Importar
                        </Button> */}
                    </Stack>

                    {/* </Box> */}
                </Toolbar>
            </Container>
            <CartDrawer handleOpen={handleOpen} cartDrawer={cartDrawer} />
            {isLoading && <LinearProgress color='secondary' />}
            <Divider />
        </AppBar>
    )
}
