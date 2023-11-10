import React from 'react'
import '../HomePage.css'
const HomeTopSection = ({content}) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center text-white text-center " id='home-bg'>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-12" >
          <h1 className='home-text'>{content}</h1>
          </div>
        </div>

</div>
    </>
  )
}

export default HomeTopSection
