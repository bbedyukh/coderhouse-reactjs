import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
import { useLoadingContext } from '../../contexts/LoadingContext'
import { Mock } from '../../utils/Mock'
import { makeStyles } from '@mui/styles'
import { Grid, Box, Typography, Skeleton } from '@mui/material'
import { Capitalize } from '../../utils/Helpers'

const useStyles = makeStyles(theme => ({
    typography: {
        fontWeight: 600,
    },
}))

const getItems = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock)
        }, 2000)
    })

export const ItemListContainer = () => {
    const classes = useStyles()
    const [items, setItems] = useState([])
    const { category } = useParams()
    const { isLoading, setLoading } = useLoadingContext()

    useEffect(() => {
        setLoading(true)
        if (category) {
            getItems()
                .then(result => {
                    setItems(result.filter(i => i.category === category))
                })
                .catch(err => console.error(err))
                .finally(() => setLoading(false))
        } else {
            getItems()
                .then(result => {
                    setItems(result)
                })
                .catch(err => console.error(err))
                .finally(() => setLoading(false))
        }
    }, [category, setLoading])

    return (
        <>
            {isLoading ? (
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Skeleton
                            animation='wave'
                            width='250px'
                            height='10px'
                        />
                    </Box>
                    <Box my={5}>
                        <Grid justifyContent='center' container spacing={5}>
                            {Array.from(Array(12).keys()).map(s => (
                                <Grid key={s} item>
                                    <Skeleton
                                        animation='wave'
                                        variant='rectangular'
                                        width='250px'
                                        height='250px'
                                    />
                                    <Box
                                        my={2}
                                        display='flex'
                                        justifyContent='center'>
                                        <Skeleton
                                            animation='wave'
                                            width='200px'
                                            height='10px'
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            ) : (
                <>
                    <Typography
                        align='center'
                        variant='h1'
                        className={classes.typography}>
                        {Capitalize(category ? category : 'productos')}
                    </Typography>
                    <Box my={5}>
                        <Grid justifyContent='center' container spacing={5}>
                            <ItemList items={items} />
                        </Grid>
                    </Box>
                </>
            )}
        </>
    )
}
