import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BorrowersList from '../feature-borrower/BorrowersList'
import {CiHome, CiViewList} from 'react-icons/ci'
import {VscAdd} from 'react-icons/vsc'

const Navbar = () => {
  return (
    <nav className='flex flex-col text-white'>
        <div className='flex flex-row'>
            <div className='flex-1/2 bg-slate-900 z-50 pt-3 border-gray-300  px-4 space-y-5 min-w-fit h-screen shadow-lg'>
                <Link to="/" className='flex flex-col items-center'>
                    <i className='text-xl'><CiHome /></i>
                    <span className='text-sm font-medium'>Home</span>
                </Link>
                <Link to="/borrowers" className='flex flex-col items-center'>
                    <i className='text-xl'><CiViewList /></i>
                    <span className='text-sm font-medium'>Borrowers</span>
                </Link>
                <Link to="/borrowers/add" className='flex flex-col items-center'>
                    <i className='text-xl'><VscAdd /></i>
                    <span className='text-sm'>Add borrower</span>
                </Link>
            </div>
            <div className='flex-1 z-50 border border-gray-300 px-3'>
               <Outlet />
            </div>
        
        </div>
    </nav>
  )
}

export default Navbar