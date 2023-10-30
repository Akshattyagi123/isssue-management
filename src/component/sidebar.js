import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillHome, AiOutlinePlus, AiOutlineIssuesClose} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi'
function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <GiHamburgerMenu className='ham'/>
        <AiFillHome className='home'/>
        <AiOutlinePlus className='plus'/>
        <AiOutlineIssuesClose className='issues'/>
        <FiSettings className='settings'/>
      </div>
    </div>
  )
}

export default Sidebar