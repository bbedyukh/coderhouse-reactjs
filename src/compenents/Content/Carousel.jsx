import React from 'react';
import CarouselLib from 'react-material-ui-carousel';
import Box from "@material-ui/core/Box";
import img1 from '../../assets/images/carousel/1.jpg';
import img2 from '../../assets/images/carousel/2.jpg'
import img3 from '../../assets/images/carousel/3.jpg'
import img4 from '../../assets/images/carousel/4.jpg'
import img5 from '../../assets/images/carousel/5.jpg'
import img6 from '../../assets/images/carousel/6.jpg'
import img7 from '../../assets/images/carousel/7.jpg'
import img8 from '../../assets/images/carousel/8.jpg'

export default function Carousel(props) {
    var images = [
        {
            url: img1,
            alt: "A description"
        },
        {
            url: img2,
            alt: "A description"
        },
        {
            url: img3,
            alt: "A description"
        },
        {
            url: img4,
            alt: "A description"
        },
        {
            url: img5,
            alt: "A description"
        },
        {
            url: img6,
            alt: "A description"
        },
        {
            url: img7,
            alt: "A description"
        },
        {
            url: img8,
            alt: "A description"
        },
    ]

    return (
        <CarouselLib
            indicators={false}
            animation={"slide"}>
            {images.map((item, i) => <Item key={i} item={item} />)}
        </CarouselLib>
    )
}

function Item(props) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxHeight="300px"
        >
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button> */}
            <img alt={props.item.alt} src={props.item.url} />
        </Box>
    )
}