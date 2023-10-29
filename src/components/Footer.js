import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagamIcon from "@mui/icons-material/Instagram"
import "../styles/Footer.css"


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/nikita-perehudov/' target='_blank'><LinkedInIcon /></a>
        <a href='https://www.instagram.com/de_nikitus/' target='_blank'><InstagamIcon /></a> 
      </div>
    </div>
  )
}

export default Footer
