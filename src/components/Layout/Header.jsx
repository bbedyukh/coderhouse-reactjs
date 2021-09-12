import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Container, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DonBoedoLogo from '../../assets/images/logo-black.png'
import { SwitchCustom } from '../Custom/SwitchCustom';
import { CartWidget } from '../Cart/CartWidget';
import { CartDrawer } from '../Cart/CartDrawer'
import { Menu } from '../Menu'

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(2)
    }
}));

export const Header = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const [count, setCount] = useState(0)
    const [cartDrawer, setCartDrawer] = useState(false)
    const isMenuOpen = Boolean(anchorEl)

    const handleOpen = () => {
        setCartDrawer(!cartDrawer)
    }

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
    };

    const onHandleClose = () => {
        setAnchorEl(null)
    };

    return (
        <AppBar position="static" elevation={0} color="primary">
            <Container>
                <Toolbar>
                    <Avatar alt="Don Boedo Logo" src={DonBoedoLogo} />
                    <Box flexGrow="1">
                        <Typography variant="h6" className={classes.title}>
                            Don Boedo
                        </Typography>
                    </Box>

                    <Box display={{ xs: 'inline', sm: 'none' }}>
                        <IconButton color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box display={{ xs: 'none', sm: 'inline' }} >
                        <SwitchCustom />
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Carta digital
                        </Button>
                        <Menu isMenuOpen={isMenuOpen} anchorEl={anchorEl} onHandleClose={onHandleClose} />
                        <CartWidget item={count} handleClick={() => setCartDrawer(!cartDrawer)} />
                        <Button onClick={() => setCount(count + 1)}>Agregar</Button>
                    </Box>

                </Toolbar>
            </Container>
            <CartDrawer handleOpen={handleOpen} cartDrawer={cartDrawer} />
        </AppBar>
    );
}
