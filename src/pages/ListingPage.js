import React from 'react'
import ShopCarousel from '../components/listing/ShopCarousel'
import CardListing from '../components/listing/CardListing'

export default function ListingPage(){
    return (
        <React.Fragment>

            {/* Carousel */}
            <ShopCarousel/>
            {/* Product listing - card */}
            <CardListing/>

        </React.Fragment>
    )
}
