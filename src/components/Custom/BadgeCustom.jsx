import { Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledBadge = withStyles(theme => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge)

export const BadgeCustom = props => {
    const { badgeContent } = props
    return (
        <StyledBadge badgeContent={badgeContent} color='secondary'>
            {props.children}
        </StyledBadge>
    )
}
