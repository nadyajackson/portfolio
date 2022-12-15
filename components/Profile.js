import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEtsy} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

export default function Profile () {
  function on (e) {
    document.body.classList.toggle('mobile-nav-active')
    console.log(e)
}

    return(
        <div className="profile" onClick={on}>
       
        <Image src="/smirk.jpg"  layout='raw' width= "100%" height="100%" alt="picture of nadya jackson holding a stack of books" className="pImg img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.js">Nadya Jackson</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://github.com/nadyajackson" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/nbjackson/" className="linkedin"  target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.etsy.com/shop/NJsNerdyKnickknacks" className="linkedin"  target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEtsy} /></a>
        </div>
      </div>
    )
}
