import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useLoadingContext } from '../../contexts/LoadingContext'
import { Mock } from '../../utils/Mock'
import { Skeleton } from '@mui/material'

const getItems = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(Mock)
        }, 2000)
    })

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { itemId } = useParams()
    const { isLoading, setLoading } = useLoadingContext()

    useEffect(() => {
        setLoading(true)
        getItems()
            .then(result =>
                setItem(result.find(item => item.id === parseInt(itemId)))
            )
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [itemId, setLoading])

    return (
        <>
            {isLoading ? (
                <Skeleton
                    variant='rectangular'
                    animation='wave'
                    width='100%'
                    height='480px'
                />
            ) : (
                <ItemDetail item={item} initial={1} />
            )}
        </>
    )
}
