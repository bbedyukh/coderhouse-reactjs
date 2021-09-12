import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@material-ui/core'
import { ItemDetail } from './ItemDetail'

const empanadasFromAPI = [
    { id: 1, title: "Empanada vegetariana", description: "Relleno: Carne de soja, morrón colorado, morrón verde, ajo, cebolla, cebolla de verdeo, huevo y aceitunas.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555236178.jpg" },
    { id: 2, title: "Empanada de carne", description: "Relleno: Carne molida, cebolla, morrón, ajo, huevo y aceitunas verdes.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207899.jpg" },
    { id: 3, title: "Empanada de carne cortada a cuchillo", description: "Relleno: Carne cortada a cuchillo, cebolla, morrón, ajo, huevo, ají picante y aceitunas verdes.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230009.jpg" },
    { id: 4, title: "Empanada de carne picante", description: "Relleno: Carne molida, cebolla, morrón, ajo, huevo, ají picante y aceitunas verdes.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207885.jpg" },
    { id: 5, title: "Empanada de jamón y queso", description: "Relleno: Jamón y queso.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203994.jpg" },
    { id: 6, title: "Empanada de pollo", description: "Relleno: Pollo, cebolla, morrón y ajo.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207875.jpg" },
    { id: 7, title: "Empanada capresse", description: "Relleno: Muzzarella, tomate y albahaca.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207833.jpg" },
    { id: 8, title: "Empanada de roquefort", description: "Relleno: Muzzarella y roquefort.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203970.jpg" },
    { id: 9, title: "Empanada de humita", description: "Relleno: Choclo y salsa blanca.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207848.jpg" },
    { id: 10, title: "Empanada de cebolla y queso", description: "Relleno: Cebolla y muzzarella.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207823.jpg" },
    { id: 11, title: "Empanada de verdura", description: "Relleno: Acelga y salsa blanca.", price: 95, pictureUrl: "https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228045.jpg" },
]

const getEmpanadas = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(empanadasFromAPI)
    }, 2000)
})

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchEmpanadas = () => {
        getEmpanadas()
            .then(result => setProduct(result[Math.floor(Math.random() * result.length)]))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchEmpanadas()
    }, [])

    return (
        <>
            {
                loading ? <LinearProgress color="secondary" /> :
                    <ItemDetail product={product} stock={5} initial={1} />
            }
        </>
    )
}
