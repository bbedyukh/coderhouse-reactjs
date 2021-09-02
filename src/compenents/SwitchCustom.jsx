import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import LightIcon from '@material-ui/icons/Brightness2';
import DarkIcon from '@material-ui/icons/Brightness5';
import Avatar from '@material-ui/core/Avatar';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 48,
        height: 18,
        padding: 0,
        overflow: 'visible',
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 0,
        width: 32,
        height: 23,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: theme.palette.common.white,
                opacity: 1,
                border: `3px solid ${theme.palette.grey[300]}`,
            },
        }
    },
    input: {
        left: -13,
        width: 60,
    },
    track: {
        borderRadius: 26 / 2,
        border: `3px solid ${theme.palette.grey[300]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: theme.palette.text.primary,
        color: '#FFF'
    }
}))(({ classes, ...props }) => {
    return (
        <Switch
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                track: classes.track,
                checked: classes.checked,
                input: classes.input
            }}
            {...props}
        />
    );
});

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: theme.palette.text.primary,
        color: '#FFF'
    }
}));


export default function SwitchCustom() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            checkedIcon={<Avatar className={classes.small}><LightIcon fontSize="small" /></Avatar>}
            icon={<Avatar className={classes.small}><DarkIcon fontSize="small" /></Avatar>}
        />
    );
}