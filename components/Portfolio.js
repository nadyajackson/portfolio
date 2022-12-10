import React from "react";
import Image from 'next/image'
import Link from 'next/link'

function Portfolio({display}) {
 
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      {console.log(display)}
            <h4>{display.fields.title}</h4>
            <ul>
              <li>Database: {display.fields.database}</li>
              <li>Github: <Link href={display.fields.githubUrl}>Click Here</Link></li>
              <li>Hosting: {display.fields.hosting}</li>
              <li>Other Features: {display.fields.otherFeatures}</li>
            </ul>
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