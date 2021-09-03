import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BadgeCustom from './BadgeCustom.jsx';

const useStyles = makeStyles((theme) => ({
    textColor: {
        color: theme.palette.text.primary
    }
}));

const CartWidget = () => {
    const classes = useStyles();

    return (
        <div>
            <IconButton aria-label="cart">
                <BadgeCustom badgeContent={4}>
                    <ShoppingCartIcon className={classes.textColor} />
                </BadgeCustom>
            </IconButton>
        </div>
    )
}

export default CartWidget
