import React from "react";
import Image from 'next/image'

function Portfolio({display}) {
 
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
    
            <div className="portfolio-wrap">
              <Image src= {`https:`+ display.fields.image.fields.file.url} width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href={display.fields.url} data-gallery="portfolioGallery" className="portfolio-lightbox" title={display.fields.title}><i className="bx bx-plus"></i></a>
                {/* <button title="More Details" onClick={()=>handlePage(display.fields)}><i className="bx bx-link"></i></button> */}
              </div>
        </div>

    </div>
  )
}

export default Portfolio