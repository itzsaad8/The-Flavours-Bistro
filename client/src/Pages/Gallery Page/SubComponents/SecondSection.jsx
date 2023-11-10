import React from 'react'

const SecondSection = ({title,description}) => {
  return (
    <>
        <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='text-center d-flex flex-column justify-content-center custom-height'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SecondSection
