import React from 'react'

const TopSection = ({title,description}) => {
  return (
    <>
      <div className="container-fluid" id='container-fluid'>
                <div className='container '>
                    <div className="row">
                        <div className="col">
                            <div className='text-center d-flex flex-column justify-content-center custom-height my-5 text-white'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TopSection
