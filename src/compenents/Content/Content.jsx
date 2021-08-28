import React from 'react'
import Carousel from './Carousel.jsx'
import { Container, Divider } from '@material-ui/core'

export default function Content() {
    return (
        <div>
            <Container maxWidth={false} disableGutters={true}>
                <Carousel />
                <Divider />
            </Container>
        </div>
    )
}
