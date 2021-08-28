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
import Switch from '@material-ui/core/Switch';
import { Brightness4, Brightness5 } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} style={{ borderBottom: '1px solid', borderColor: '#c6c6c6' }}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Box mx={1}>
                            <Avatar alt="Don Boedo Logo" src={logo} />
                        </Box>
                        <Typography variant="h6" className={classes.title}>
                            Don Boedo
                        </Typography>
                        {/* <Box mx={1}>
                            <Button color="inherit">Sucursales</Button>
                        </Box> */}
                        <Box mx={1}>
                            <Button variant="outlined" color="inherit">Carta digital</Button>
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