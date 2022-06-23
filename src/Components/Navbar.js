import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { VscChromeClose } from 'react-icons/vsc';
import { BsFacebook,BsTwitter,BsLinkedin,BsGithub } from 'react-icons/bs';
import logo from '../asset/logo/white.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    // create toggle function
    const handleOpenNav = () => {
        setOpen(!open)
    }

    // create close function
    const handleCloseNav = () => {
        setOpen(!open)
    }
  return (
    <section  className='w-full z-10 fixed'>

  <main className='z-10 h-16 flex justify-between px-4 items-center bg-[#0a192f] text-gray-300'>
        {/* Logo section */}
    <div>
        <img className='hover:scale-110 cursor-pointer duration-500 animate-pulse' src={logo} style={{width:'70px'}} alt="" />
    </div>

    {/* Desktop nav section */}
    <ul className='hidden md:flex space-x-6 uppercase font-medium'>

        <li className='cursor-pointer'>
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
        </li>

        <li className='cursor-pointer'>
        <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
        </li>

        <li className='cursor-pointer'>
        <Link to="skill" spy={true} smooth={true} offset={-30} duration={500}>Skills</Link>
        </li>

        <li className='cursor-pointer'>
        <Link to="work" spy={true} smooth={true} offset={-30} duration={500}>Work</Link>
        </li>

        <li className='cursor-pointer'>
        <Link to="contact" spy={true} smooth={true} offset={-30} duration={500}>Contact</Link>
        </li>

        {/* <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Skills</li>
        <li className='cursor-pointer'>Work</li>
        <li className='cursor-pointer'>Contact</li> */}
    </ul>

    {/* Toggle icon section */}
    <div className='md:hidden' onClick={handleOpenNav}>
        {
            (!open) ? <FiMenu className='cursor-pointer' size={25} /> :
            <VscChromeClose className='cursor-pointer' size={25} />
        }

    {/* Mobile navbar secion */}
    <ul className={(!open) ? 'hidden': 'absolute top-16 uppercase text-xl font-medium flex flex-col left-0 bg-[#0a192f] w-full h-[250px]'}>

        {/* <img className='hover:scale-110 cursor-pointer duration-500' src={logo} style={{width:'70px'}} alt="" /> */}

        <li className='cursor-pointer border-b mx-10 text-center p-2 hover:bg-slate-700 rounded duration-500'>
        <Link onClick={handleCloseNav} to="home" spy={true} smooth={true} offset={-20} duration={500}>Home</Link>
        </li>

        <li className='cursor-pointer border-b mx-10 text-center p-2 hover:bg-slate-700 rounded duration-500'>
        <Link onClick={handleCloseNav} to="about" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
        </li>

        <li className='cursor-pointer border-b mx-10 text-center p-2 hover:bg-slate-700 rounded duration-500'>
        <Link onClick={handleCloseNav} to="skill" spy={true} smooth={true} offset={-30} duration={500}>Skills</Link>
        </li>

        <li className='cursor-pointer border-b mx-10 text-center p-2 hover:bg-slate-700 rounded duration-500'>
        <Link onClick={handleCloseNav} to="work" spy={true} smooth={true} offset={-30} duration={500}>Work</Link>
        </li>
        
        <li className='cursor-pointer mx-10 text-center p-2 border-b hover:bg-slate-700 rounded duration-500'>
        <Link onClick={handleCloseNav} to="contact" spy={true} smooth={true} offset={-30} duration={500}>Contact</Link>
        </li>
    </ul>
    </div>
  </main>

  {/* fixed social icon section */}
  <ul className='hidden md:flex flex-col fixed top-[40%] space-y-1'>

    <li>
        <a className='flex justify-around w-[140px] h-10 ml-[-100px] duration-500 hover:ml-[-5px] items-center bg-yellow-400 rounded' href="https://www.facebook.com/"><p className='text-xl font-medium pr-2'>Facebook</p> <BsFacebook size={25}/></a>
    </li>

    <li>
        <a className='flex justify-around bg-pink-400 w-[140px] h-10 ml-[-100px] duration-500 hover:ml-[-10px] items-center rounded' href="https://twitter.com/SujonSh15669338"><p className='text-xl font-medium pr-2'>Twitter</p> <BsTwitter size={25}/></a>
    </li>

    <li>
        <a className='flex justify-around w-[140px] h-10 ml-[-100px] duration-500 hover:ml-[-8px] items-center bg-blue-400 rounded' href="https://www.linkedin.com/in/sujon-sheikh/"><p className='text-xl font-medium pr-2'>Linkedin</p> <BsLinkedin size={25}/></a>
    </li>

    <li>
        <a className='flex justify-around w-[140px] h-10 ml-[-100px] duration-500 hover:ml-[-10px] items-center bg-green-400 rounded' href="https://github.com/sujonphero"><p className='text-xl font-medium pr-2'>Github</p> <BsGithub size={25}/></a>
    </li>
  </ul>

    
    </section>
  )
}

export default Navbar