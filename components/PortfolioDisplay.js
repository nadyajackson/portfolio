import Image from 'next/image'
import React, { useContext } from "react";
// import {PageContext} from '../pages/paginationContext';

export default function PortfolioDisplay ({portfolio}) {
  // const {pageInfo} = useContext(PageContext)

  // function handlePage(data){
  //   pageInfo(data)
  //   location.href='./portfolio'
  // }

    return(
        <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          {/* <p>Click a project below to access more information!</p> */}
        </div>

        {/* <div className="row" >
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div className="row portfolio-container" >
          {portfolio.items.map(display =>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image src= {`https:`+ display.fields.image.fields.file.url} width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href={display.fields.url} data-gallery="portfolioGallery" className="portfolio-lightbox" title={display.fields.title}><i className="bx bx-plus"></i></a>
                {/* <button title="More Details" onClick={()=>handlePage(display.fields)}><i className="bx bx-link"></i></button> */}
              </div>
            </div>
          </div>
          )}
          

        </div>

      </div>
        </section>
    )
}