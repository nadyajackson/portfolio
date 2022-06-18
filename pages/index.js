import {createClient} from 'contentful'
import  '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEtsy} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
export async function getStaticProps() {
 const client = createClient({
   space: '99jhvad3xcxf',
   accessToken: 'sn74qrU8fsfEvte-2L8tt8nV4EKO1iPGuu1O-dUX3fo',
 })

 const sum = await client.getEntries({content_type:'professionalSummary'})
 const edu = await client.getEntries({content_type:'education'})
 const JobList = await client.getEntries({content_type:'jobTypes'})

 const portfolio = await client.getEntries({content_type:'portfolio'})
 const skillsList = await client.getEntries({content_type:'skills'})
 const contact = await client.getEntries({content_type:'contact'})
  
  return{
    props:{
      sum,
      edu,
      JobList,
      portfolio,
      skillsList,
      contact
  }}
}
function on (e) {
  if(e.className === "bi bi-list mobile-nav-toggle d-xl-none"){
    console.log("I work")
  }
  else{
    console.log("am I working?")
  }
 
}


export default function Home({sum,edu,JobList,contact, skillsList}) {
  
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={on}></i>
      
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <Image src="/smirk.jpg"  width= "100%" height="100%" alt="picture of nadya jackson holding a stack of books" className="pImg img-fluid rounded-circle"/>
            <h1 className="text-light"><a href="index.js">Nadya Jackson</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/nadyajackson" className="linkedin"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/nbjackson/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              <a href="https://www.etsy.com/shop/NJsNerdyKnickknacks" className="linkedin"><FontAwesomeIcon icon={faEtsy} /></a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Skills</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" >
          <h1>Nadya Jackson</h1>
          <p>Full Stack Web Developer</p>
        </div>
      </section>


      <main id="main">

        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>Professional Summary</h2>
              <p>{sum.items[0].fields.summary}</p>
            </div>
          </div>
        </section>

        <section id="resume" className="resume section-bg"> 
          <div className="container">

            <div className="section-title">
              <h2>Resume</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>{contact.items[0].fields.name}</h4>
                  <ul>
                    <li>{contact.items[0].fields.location}</li>
                    <li>{contact.items[0].fields.phoneNumber}</li>
                    <li>{contact.items[0].fields.email}</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                {edu.items.map(one =>
                      <div key={one.fields.what}className="resume-item">
                        <h4>{one.fields.where}</h4>
                        <h5>{one.fields.when}</h5>
                        <p>{one.fields.what}</p>
                      </div>)}
            
              </div>
              <div className="col-lg-6" >
                <h3 className="resume-title">Professional Experience</h3>
                {JobList.items.map(one =>
                  <div key={one.fields.title}className="resume-item">
                    <h4>{one.fields.title}</h4>
                    <h5>{one.fields.when}</h5>
                    <p><em>{one.fields.where} </em></p>
                    <ul>
                      <li>{one.fields.what1}</li>
                      <li>{one.fields.what2}</li>
                      <li>{one.fields.what3}</li>
                    </ul>
                  </div>
                )}
            </div>
          </div>
          </div>
        </section>


        <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" >
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" >

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image src="/for-your-interest.png" width= "416px" height="279px" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="/for-your-interest.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
        </section>


        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Skills</h2>
            </div>

            <div className="grid">
              <div className="col-lg-6" >
                {(skillsList.items.map( one =><p key={one.fields.skill} >{one.fields.skill}</p>))}
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row" >

            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>{contact.items[0].fields.location}</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>{contact.items[0].fields.email}</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>{contact.items[0].fields.phoneNumber}</p>
                </div>

                
              </div>

            </div>

    

          </div>

        </div>
        </section>
      </main>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div> 
  )
}
