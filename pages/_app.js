import '../styles/globals.css'
import "../styles/vendor/aos/aos.css"
import "../styles/vendor/bootstrap/css/bootstrap.min.css"
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css" 
import"../styles/vendor/boxicons/css/boxicons.min.css" 
import"../styles/vendor/glightbox/css/glightbox.min.css" 
import"../styles/vendor/swiper/swiper-bundle.min.css" 
import PaginationProvider from './paginationContext'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <PaginationProvider>
    <Component {...pageProps} />
    </PaginationProvider>
    )
  

}

export default MyApp

