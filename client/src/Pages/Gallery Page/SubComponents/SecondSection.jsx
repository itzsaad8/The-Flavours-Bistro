import React from 'react'

const SecondSection = ({title,description}) => {
  return (
    <>
        <div className="container my-5">
                <div className="row ">
                    <div className="col">
                        <div className='text-center d-flex flex-column justify-content-center custom-height my-5'>
                            <h1 className='second_gallery_title'>{title}</h1>
                            <p className='second_gallery_desc'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SecondSection
