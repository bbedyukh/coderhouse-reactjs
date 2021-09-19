import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography } from '@material-ui/core'
import { Item } from './Item'
import Skeleton from '@material-ui/lab/Skeleton'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    typography: {
        fontWeight: 600,
    },
}))

const capitalize = str => {
    let lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}

export const ItemList = ({ items, stock, initial, isLoading }) => {
    const classes = useStyles()
    const { category } = useParams()

    return (
        <>
            {isLoading ? (
                <Box align='center'>
                    <Skeleton animation='wave' width='250px' height='10px' />
                </Box>
            ) : (
                <Typography
                    align='center'
                    variant='h1'
                    className={classes.typography}
                >
                    {capitalize(category)}
                </Typography>
            )}
            <Box my={5}>
                <Grid justifyContent='center' container spacing={5}>
                    {isLoading &&
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(s => (
                            <Grid key={s} item>
                                <Skeleton
                                    animation='wave'
                                    variant='rect'
                                    width='350px'
                                    height='180px'
                                />
                                <Box my={2} align='center'>
                                    <Skeleton
                                        animation='wave'
                                        width='250px'
                                        height='10px'
                                    />
                                </Box>
                                <Box
                                    my={2}
                                    display='flex'
                                    justifyContent='space-around'
                                >
                                    <Skeleton
                                        animation='wave'
                                        width='125px'
                                        height='50px'
                                    />
                                    <Skeleton
                                        animation='wave'
                                        width='125px'
                                        height='50px'
                                    />
                                </Box>
                            </Grid>
                        ))}
                    {items.map(product => (
                        <Grid key={product.id} item>
                            <Item
                                item={product}
                                stock={stock}
                                initial={initial}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}
