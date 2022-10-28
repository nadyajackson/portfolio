import {createClient} from 'contentful'
import  '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import Profile from '../components/Profile'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Resume from '../components/Resume'
// import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'


export async function getStaticProps() {
 const client = createClient({
  accessToken: 'sn74qrU8fsfEvte-2L8tt8nV4EKO1iPGuu1O-dUX3fo',
  space: '99jhvad3xcxf',
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
    document.body.classList.toggle('mobile-nav-active')
    console.log(e)
}


export default function Home({sum,edu,JobList,contact, skillsList}) {
  
  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none HamMenu" onClick={on}></i>
      
      <header id="header">
        <div className="d-flex flex-column">
          <Profile contact={contact}/>
          <NavBar/>
        </div>
      </header>

      <Hero/>


      <main id="main">
        <About sum={sum}/>
        <Resume contact={contact} JobList={JobList} edu={edu}/>
        {/* <Portfolio/> */}
        <Skills skillsList={skillsList}/>
        <Contact contact={contact}/>
      </main>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div> 
  )
}
