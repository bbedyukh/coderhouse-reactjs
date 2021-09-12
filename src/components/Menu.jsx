import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Popover, List, ListItem, ListItemText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    list: {
        padding: theme.spacing(2),
    },
    itemLink: {
        color: theme.palette.text.primary
    }
}));

const ListItemLink = (props) => {
    const classes = useStyles();
    return <ListItem component="a" className={classes.itemLink} {...props} />;
}

export const Menu = ({ isMenuOpen, anchorEl, onHandleClose }) => {
    const classes = useStyles();
    return (
        <Popover
            open={isMenuOpen}
            anchorEl={anchorEl}
            onClose={onHandleClose}
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
    )
}
