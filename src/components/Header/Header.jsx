import React,{useEffect,useState} from 'react';
import './styles.css';
import {AppBar,Toolbar,MenuItem,Menu} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    
    return (
        <>
            <div className='header'>
                {/* <Toolbar> */}
                    <div className='nav-links'>
                        <a>Home</a>
                        <a>Recharge</a>
                        <a>Post Job</a>
                        <a className='active'>Profile</a>
                        <a>Help</a>

                    </div>
                    
                {/* </Toolbar> */}
                

            </div> 
       
            
        </>
    )
}

export default Header
