import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@material-ui/core'
import { ItemList } from './ItemList'

const pizzasFromAPI = [
    { id: 1, title: "Muzzarella", description: "Test description", price: 650, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228383.jpg" },
    { id: 2, title: "Fugazzeta", description: "Test description", price: 740, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480256273.jpg" },
    { id: 3, title: "Napolitana", description: "Test description", price: 740, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261320.jpg" },
    { id: 4, title: "Calabresa", description: "Test description", price: 800, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230939.jpg" },
    { id: 5, title: "Pepperoni", description: "Test description", price: 820, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482883674.jpg" },
    { id: 6, title: "Veneciana", description: "Test description", price: 820, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230929.jpg" },
    { id: 7, title: "Muzzarella c/ jamón y morrón", description: "Test description", price: 800, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236996.jpg" },
    { id: 8, title: "Especial Don Boedo", description: "Test description", price: 840, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480275596.jpg" },
    { id: 9, title: "Muzzarella c/ morrón", description: "Test description", price: 740, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480256055.jpg" },
    { id: 10, title: "Muzzarella c/ huevo", description: "Test description", price: 740, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230561.jpg" }
]

const getPizzas = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(pizzasFromAPI)
    }, 2000)
})

export const ItemListContainer = () => {
    const [pizzas, setPizzas] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchPizzas = () => {
        getPizzas()
            .then(result => setPizzas(result))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchPizzas()
    }, [])

    return (
        <div>
            {
                loading ? (<LinearProgress color="secondary" />) :
                    <ItemList items={pizzas} stock={5} initial={1} />
            }
        </div>
    )
}
