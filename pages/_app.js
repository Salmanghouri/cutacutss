import '../styles/globals.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Navbar2 from './Navbar/Navbar2'
import Topbar from './Navbar/Topbar'
import Topbar2 from './Navbar/Topbar2'
import Navbar3 from './Navbar/Navbar3'

function MyApp({ Component, pageProps }) {
  return ( 
    <>
    <Topbar/>
    <Topbar2/>
    <Navbar/>
    <Navbar3/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
