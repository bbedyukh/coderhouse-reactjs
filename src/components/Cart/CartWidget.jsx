import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { BadgeCustom } from '../Custom/BadgeCustom'

const useStyles = makeStyles(theme => ({
    textColor: {
        color: theme.palette.text.primary,
    },
}))

export const CartWidget = ({ item, handleClick }) => {
    const classes = useStyles()

    return (
        <IconButton onClick={handleClick} aria-label='cart'>
            <BadgeCustom badgeContent={item}>
                <ShoppingCartIcon className={classes.textColor} />
            </BadgeCustom>
        </IconButton>
    )
}
