import React, { useState } from 'react';

// Define the Navbar functional component
const Navbar = () => {
  // State to manage the drawer's open/close status
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle scrolling to a section
  const handleScroll = (sectionId: string) => {
    // Close the drawer if open
    setIsDrawerOpen(false);
    // Scroll to the given section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className='flex justify-between items-center py-6 px-4 backdrop-blur-lg bg-[rgba(255,255,255,0.25)] rounded-xl my-4 sticky top-4 z-50 border border-[rgba(255,255,255,0.3)] shadow-lg'>
      {/* Logo and title */}
      <div className='flex items-center gap-[1ch]'>
        <div className='w-5 h-5 bg-[#FF8B3D] rounded-full' />
        <span className='text-sm font-semibold tracking-widest text-[#004777]'>
          PORTFOLIO
        </span>
      </div>

      {/* Desktop navigation links */}
      <div className='hidden md:flex gap-12 text-md'>
        <a onClick={() => handleScroll('home')} className='cursor-pointer text-[#004777] font-medium hover:text-[#FF5A5F] transition-colors'>
          Home
        </a>
        <a onClick={() => handleScroll('projects')} className='cursor-pointer text-[#004777] hover:text-[#FF5A5F] transition-colors'>
          Projects
        </a>
        <a onClick={() => handleScroll('skills')} className='cursor-pointer text-[#004777] hover:text-[#FF5A5F] transition-colors'>
          Skills
        </a>
        <a onClick={() => handleScroll('contact')} className='cursor-pointer text-[#004777] hover:text-[#FF5A5F] transition-colors'>
          Contact
        </a>
      </div>

      {/* Mobile menu button */}
      <div className='md:hidden'>
        <button onClick={toggleDrawer} className="w-10 h-10 rounded-full bg-[#FF8B3D]/20 backdrop-blur-md flex items-center justify-center border border-[#FF8B3D]/30 text-[#004777] shadow-lg">
          ☰
        </button>
      </div>

      {/* Drawer for mobile view */}
      {isDrawerOpen && (
        <div
          className='fixed top-0 right-0 h-full w-64 bg-[rgba(255,245,225,0.8)] backdrop-blur-lg z-50 shadow-2xl p-6 border-l border-white/30'
          style={{ transition: 'transform 0.3s ease-in-out', transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)' }}
        >
          <button onClick={toggleDrawer} className='mb-6 w-10 h-10 rounded-full bg-[#FF8B3D]/20 backdrop-blur-md flex items-center justify-center border border-[#FF8B3D]/30 text-[#004777] shadow-lg'>
            ✖
          </button>
          <div className='flex flex-col gap-4'>
            <a onClick={() => handleScroll('home')} className='cursor-pointer text-[#004777] font-medium hover:text-[#FF5A5F] transition-colors'>
              Home
            </a>
            <a onClick={() => handleScroll('projects')} className='cursor-pointer text-[#004777] hover:text-[#FF5A5F] transition-colors'>
              Projects
            </a>
            <a onClick={() => handleScroll('skills')} className='cursor-pointer text-[#004777] hover:text-[#FF5A5F] transition-colors'>
              Skills
            </a>
            <a onClick={() => handleScroll('contact')} className='cursor-pointer text-[#004777] hover:text-[#FF5A5F] transition-colors'>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
