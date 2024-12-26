import React from 'react'
//import Footer from './Footer'
import Footer from './Footer'
import Navbar from './Navbar'


const Header = ({val}) => {
  return (
    <div>
        {val}
        {
            val>10 ? <Footer/> : <Navbar/>
        }
    </div>
  )
}

export default Header