import '../styles/globals.css'
import "../styles/vendor/aos/aos.css"
import "../styles/vendor/bootstrap/css/bootstrap.min.css"
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css" 
import"../styles/vendor/boxicons/css/boxicons.min.css" 
import"../styles/vendor/glightbox/css/glightbox.min.css" 
import"../styles/vendor/swiper/swiper-bundle.min.css" 


// import "./vendor/purecounter/purecounter.js"
//import "./vendor/aos/aos.js"
// import "./vendor/bootstrap/js/bootstrap.bundle.min.js"
// import "./vendor/glightbox/js/glightbox.min.js"
// import "./vendor/isotope-layout/isotope.pkgd.min.js"
//import "./vendor/swiper/swiper-bundle.min.js"
// import "./vendor/typed.js/typed.min.js"
// import "./vendor/waypoints/noframework.waypoints.js"
// import "./vendor/php-email-form/validate.js"


// "./js/main.js"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
