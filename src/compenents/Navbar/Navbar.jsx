import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../assets/images/logo-black.png'
import { Brightness4, Brightness5 } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1
    },
}));

export default function Navbar() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Box mx={1}>
                            <Avatar alt="Don Boedo Logo" src={logo} />
                        </Box>
                        <Typography variant="h6" className={classes.title}>
                            Don Boedo
                        </Typography>
                        <Box mx={1}>
                            <Button
                                color="inherit"
                                endIcon={<ArrowDropDownIcon />}
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >Carta digital</Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Pizzas</MenuItem>
                                <MenuItem onClick={handleClose}>Empanadas</MenuItem>
                                <MenuItem onClick={handleClose}>Porciones</MenuItem>
                                <MenuItem onClick={handleClose}>Calzones</MenuItem>
                                <MenuItem onClick={handleClose}>Tartas</MenuItem>
                                <MenuItem onClick={handleClose}>Porciones</MenuItem>
                                <MenuItem onClick={handleClose}>Sandwich</MenuItem>
                                <MenuItem onClick={handleClose}>Cocina</MenuItem>
                                <MenuItem onClick={handleClose}>Ensaladas</MenuItem>
                                <MenuItem onClick={handleClose}>Pastas</MenuItem>
                                <MenuItem onClick={handleClose}>Postres</MenuItem>
                                <MenuItem onClick={handleClose}>Agua y gaseosas</MenuItem>
                                <MenuItem onClick={handleClose}>Cervezas</MenuItem>
                                <MenuItem onClick={handleClose}>Vinos</MenuItem>
                                <MenuItem onClick={handleClose}>Cafetería</MenuItem>
                            </Menu>
                        </Box>
                        <Box mx={1}>
                            <Button variant="contained" color="secondary">Pedidos</Button>
                        </Box>
                        <Box mx={1}>
                            <IconButton aria-label="delete">
                                <Brightness4 />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <Brightness5 />
                            </IconButton>
                            {/* <Switch
                                checked={state.checkedA}
                                onChange={handleChange}
                                icon={<Brightness4 fontSize="small" />}
                                checkedIcon={<Brightness5 fontSize="small" />}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> */}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    );
}