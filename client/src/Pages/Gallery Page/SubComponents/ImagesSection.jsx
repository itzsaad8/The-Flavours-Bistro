import React from 'react'
import img1 from '../../../Assets/img1.webp'
import img2 from '../../../Assets/img2.webp'
import img3 from '../../../Assets/img3.webp'
import img4 from '../../../Assets/img4.webp'
import img5 from '../../../Assets/img5.webp'
import img6 from '../../../Assets/img6.webp'

const ImagesSection = ({image}) => {
    return (
        <>

                <div className="container-fluid">
            <div className="row ">
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img1} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img2} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img3} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img4} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img5} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img6} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img2} class="my-2" style={{maxWidth:"100%", height:"40vh" }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img5} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img1} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img2} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img3} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img4} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img5} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img6} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img2} class="my-2" style={{maxWidth:"100%", height:"40vh" }} alt="..." /> }
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                {<img src={img5} class="my-2" style={{maxWidth:"100%", }} alt="..." /> }
                </div>
            </div>
            </div>
            
        </>
    )
}

export default ImagesSection