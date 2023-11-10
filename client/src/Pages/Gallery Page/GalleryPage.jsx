import React from 'react'
import './GalleryPage.css'
import TopSection from './SubComponents/TopSection'
import SecondSection from './SubComponents/SecondSection'
import ImagesSection from './SubComponents/ImagesSection'
 

const GalleryPage = () => {
    return (
        <>
            <TopSection title={"Locally Sourced Food in Haverfordwest"}
                description={"Take a look below at some examples of the meals that we have created for our customers. If your mouth is watering after looking at them, give us a call and you could be enjoying our delicious food today!"}
            />

            <SecondSection title={"All of our food is made with locally sourced produce"}
                description={"If you fancy a night off from cooking, we are the perfect choice for something hearty and delicious that is sure to leave you satisfied. We have a varied menu that changes frequently, so to find out what we have to offer, don't hesitate to give us a call, we look forward to hearing from you."}
            />
            <ImagesSection/>


            
            
        </>
    )
}

export default GalleryPage
