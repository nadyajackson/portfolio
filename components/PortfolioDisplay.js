import Portfolio from "../components/Portfolio";
import React from "react";
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
          <h2>Projects</h2>
          {/* <p>Click a project below to access more information!</p> */}
        </div>

        <div className="row portfolio-container" >
        {portfolio.items.map((display)=>(
            <Portfolio
              key={display.fields.title}
              display={display}
          />
        ))}

        </div>

      </div>
        </section>
    )
}