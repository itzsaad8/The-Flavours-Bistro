import React from 'react';
import './HomePage.css'
import HomeTopSection from './HomeSubComponents/HomeTopSection';
import HomeSecondSection from './HomeSubComponents/HomeSecondSection';

export default function HomePage() {
  return (
    <>
    <HomeTopSection content={"FRESHLY PREPARED TAKEAWAY LUNCHES, 3 COURSE A LA CARTE EVENING SERVICE"}/>
    <HomeSecondSection/>
    </>
  )
}
