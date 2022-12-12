import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Gallery.css';

function Gallery() {
  return (
    <div id="head">
    <div id="heading">IT FAM</div>
        <div id="home">HOME</div>
        <div id="gallery">GALLERY</div>
        <div id="events">EVENTS</div>
        <div id="uploads">UPLOAD</div>
        <div id="support">SUPPORT</div>
        <div id='accIcon'>
        <AccountCircleIcon fontSize="large" id="accIcon"/></div>
        <hr/>
        <div id="Gallery"><b>GALLERY</b></div>
        <hr/>
       <div id="account1">
       <AccountCircleIcon fontSize="large" id="p1"/>
       <h4>&nbsp;Thamarai_Kumar&nbsp;</h4>
       <LocationOnIcon fontSize='small' id="location"/>
       <h5>&nbsp;Coimbatore&nbsp;</h5>
       <img
       </div>
    </div>
  )
}

export default Gallery