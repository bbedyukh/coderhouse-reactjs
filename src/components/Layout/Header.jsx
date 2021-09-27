import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
    Avatar,
    Divider,
    LinearProgress,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import DonBoedoLogo from '../../assets/images/logo-black.png'
import { SwitchCustom } from '../Customs/SwitchCustom'
import { CartWidget } from '../Cart/CartWidget'
import { CartDrawer } from '../Cart/CartDrawer'
import { Menu } from '../Menu'
import { useCartContext } from '../../contexts/CartContext'
import { useLoadingContext } from '../../contexts/LoadingContext'

const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: theme.spacing(2),
    },
}))

export const Header = () => {
    const classes = useStyles()
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

    useEffect(() => {
        let totalQuantity = 0
        cart?.forEach(i => (totalQuantity += i.quantity))
        setTotalCount(totalQuantity)
    }, [cart, setTotalCount])

    return (
        <AppBar position='static' elevation={0} color='primary'>
            <Container>
                <Toolbar>
                    <Link to='/'>
                        <Avatar alt='Don Boedo Logo' src={DonBoedoLogo} />
                    </Link>
                    <Box flexGrow='1'>
                        <Typography variant='h6' className={classes.title}>
                            Don Boedo
                        </Typography>
                    </Box>

                    <Box display={{ xs: 'inline', sm: 'none' }}>
                        <IconButton
                            color='inherit'
                            aria-label='menu'
                            size='large'>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box display={{ xs: 'none', sm: 'inline' }}>
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
                    </Box>
                </Toolbar>
            </Container>
            <CartDrawer handleOpen={handleOpen} cartDrawer={cartDrawer} />
            {isLoading && <LinearProgress color='secondary' />}
            <Divider />
        </AppBar>
    )
}
