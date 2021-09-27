import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { BadgeCustom } from '../Customs/BadgeCustom'

const useStyles = makeStyles(theme => ({
    textColor: {
        color: theme.palette.text.primary,
    },
}))

export const CartWidget = ({ quantity, handleClick }) => {
    const classes = useStyles()

    return (
        <IconButton onClick={handleClick} aria-label='cart' size='large'>
            <BadgeCustom badgeContent={quantity}>
                <ShoppingCartIcon className={classes.textColor} />
            </BadgeCustom>
        </IconButton>
    )
}
