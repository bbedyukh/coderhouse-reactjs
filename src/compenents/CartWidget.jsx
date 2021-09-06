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

const CartWidget = (props) => {
    const classes = useStyles();

    const { item, handleClick } = props

    return (
        <div>
            <IconButton onClick={handleClick} aria-label="cart">
                <BadgeCustom badgeContent={item}>
                    <ShoppingCartIcon className={classes.textColor} />
                </BadgeCustom>
            </IconButton>
        </div>
    )
}

export default CartWidget
