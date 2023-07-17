import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/nvlogo.png'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expendNavbar, setExpendNavbar] = useState(false);

    const location = useLocation();

    useEffect(()=> {
        setExpendNavbar(false)
    }, [location])

  return (
    <div className='navbar' id={expendNavbar ? 'open' : 'close'}>
       



        <div className='toggleButton'>
            <img src={logo} alt='logo1'/>
            <button onClick={()=>{ setExpendNavbar((prev)=> !prev)}} > <ReorderIcon/> </button>
        </div>


        <div className='links'>
            <div>

            <div className='logo'>
            <img src={logo} alt='logo'/>
            </div>

            </div>

            <div className='linksList'>
            <Link to='/'>Home</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/projects'>Projects</Link>

            </div>


        </div>

   
      
    </div>
  )
}

export default Navbar
