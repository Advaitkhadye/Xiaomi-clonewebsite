import React from 'react'
import {Link} from "react-router-dom"
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
       <Link className="HotAccessoriesLink" to="/music">MusicStore</Link>
       <Link className="HotAccessoriesLink" to="/smartdevice">Smart Devices</Link>
       <Link className="HotAccessoriesLink" to="/home">Home</Link>
       <Link className="HotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
       <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accesories</Link>

    </div>
   
  )
}

export default HotAccessoriesMenu