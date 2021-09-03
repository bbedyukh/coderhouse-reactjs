import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import DonBoedoLogo from '../../assets/images/logo-black.png'
import SwitchCustom from '../SwitchCustom.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CartWidget from '../CartWidget';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        marginLeft: theme.spacing(2)
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: theme.palette.text.primary,
        color: '#FFF'
    },
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        padding: theme.spacing(2),
    },
    itemLink: {
        color: theme.palette.text.primary
    }
}));

function ListItemLink(props) {
    const classes = useStyles();
    return <ListItem component="a" className={classes.itemLink} {...props} />;
}


export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} color="primary">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            wrap="nowrap"
                        >
                            <Grid item xs>
                                <Grid
                                    container
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Avatar alt="Don Boedo Logo" src={DonBoedoLogo} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" className={classes.title}>
                                            Don Boedo
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>

                            <Hidden smUp>
                                <Grid item>
                                    <IconButton color="inherit" aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Hidden>

                            <Hidden xsDown>
                                <Grid item>
                                    <Grid container
                                        alignItems="center"
                                        wrap="nowrap"
                                        spacing={2}
                                    >
                                        <Grid item>
                                            <SwitchCustom />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                aria-controls="simple-menu"
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                                endIcon={<ArrowDropDownIcon />}
                                            >
                                                Carta digital
                                            </Button>


                                            <Popover
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'center',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'center',
                                                }}
                                                elevation={3}
                                            >
                                                <Grid container>
                                                    <Grid item>
                                                        <List className={classes.list} dense>
                                                            <ListItem>
                                                                <ListItemText primary={<Typography variant="h6" color="secondary">COMIDAS</Typography>} />
                                                            </ListItem>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Pizzas" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Empanadas" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Porciones" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Calzones" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Tartas" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Sandwich" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Cocina" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Ensaladas" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Pastas" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Postres" />
                                                            </ListItemLink>
                                                        </List>
                                                    </Grid>
                                                    <Grid item>
                                                        <List className={classes.list} dense>
                                                            <ListItem>
                                                                <ListItemText primary={<Typography variant="h6" color="secondary">BEBIDAS</Typography>} />
                                                            </ListItem>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Agua y gaseosas" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Cervezas" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Vinos" />
                                                            </ListItemLink>
                                                            <ListItemLink href="#">
                                                                <ListItemText primary="Cafetería" />
                                                            </ListItemLink>
                                                        </List>
                                                    </Grid>
                                                </Grid>

                                            </Popover>

                                            {/* <Menu
                                                    id="simple-menu"
                                                    anchorEl={anchorEl}
                                                    keepMounted
                                                    open={Boolean(anchorEl)}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem onClick={handleClose}>Pizzas</MenuItem>
                                                    <MenuItem onClick={handleClose}>Empanadas</MenuItem>
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
                                                </Menu> */}
                                        </Grid>
                                        {/* <Grid item>
                                                <Button variant="contained" color="secondary" >Pedidos</Button>
                                            </Grid> */}

                                        <Grid item>
                                            <CartWidget />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Toolbar>
                </Container>

            </AppBar>
            <Divider />
        </div>
    );
}