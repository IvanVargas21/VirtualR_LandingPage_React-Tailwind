//for Menu
import {Menu, X} from 'lucide-react';
import { useState } from 'react';

import logo from '../assets/logo.png';
import {navItems} from '../constants/index.jsx';

const Navbar = () => {
  // [currentState, stateFunction]
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
 
  const toggleNavbar = () =>{
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    // py : vertical padding, padding-top & padding-bottom
    //py-3 : default spacing scale in TW, py-1 = 0.25rem so py-3 = 0.75rem
    // backdrop-blur-lg : large blur effect to bg,
    // if there's an element behind, will create frosted-glass look.
    // border-neutral-700/80 : border color (neutral-700, 80%opacity), neutral gray,
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
          {/* 
            mx-auto : horizontal margin, (margin-left & margin-right)
            text-sm: 0.875rem(14px)
          */}
       <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                {/* flex shrink-0: means do not shrink*/}
                <div className="flex items-center flex-shrink-0">
                    
                    {/* 10*0.25rem = 2.5rem*/}
                    <img className="h-10 w-10 mr-2"src={logo} alt="logo" />

                    {/* 
                      * tracking tight : sets letter spacing to tighter value (  letter-spacing: -0.01562em;)

                      *reduce the space between letters
                    */}
                    <span className="text-xl tracking-tight">VirtualR</span>
                </div>
                    {/* 
                      * invisible by default, visible only in large screen
                      * lg :  large screen size breakpoint in css (1024px)
                    */}
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                       <li key={index}>
                         <a href={item.href}>{item.label}</a>
                       </li>
                      )  
                    )}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>
                    <a href="#" className = "bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md" >
                        Create an Account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {/* Conditional Rendering */}
            {mobileDrawerOpen && (
              <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                  <ul>
                    {navItems.map((item, index) =>(
                      <li key="index" className='py-4'>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-6">
                      <a href="#"className='py-2 px-3 border rounded-md'>
                        Sign In
                      </a>
                      <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
                        Create an Account
                      </a>
                  </div>
              </div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;