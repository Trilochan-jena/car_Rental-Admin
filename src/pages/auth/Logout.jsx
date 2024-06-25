import React from 'react'

import { CiLogout } from "react-icons/ci";
import "../../styles/Logout.css"
const Logout = ({closeModal}) => {
  return (
    <>
      <div className='wrapper'>

        <div className='conatiner'>

          LogOut <CiLogout onClick={closeModal}/>
        </div>
      </div>

    </>
  )
}

export default Logout