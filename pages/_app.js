import '../styles/globals.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Navbar2 from './Navbar/Navbar2'
import Topbar from './Navbar/Topbar'
import Topbar2 from './Navbar/Topbar2'

function MyApp({ Component, pageProps }) {
  return ( 
    <>
    <Topbar/>
    <Topbar2/>
    <Navbar/>
    <Navbar2/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
