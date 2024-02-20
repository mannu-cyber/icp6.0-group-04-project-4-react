import React from 'react' 
import ThemeToggler from './ThemeToggler'



function Navbar() {
  return (
    <div>
<nav className='flex justify-between items-center px-3 py-2'>
<ThemeToggler/>

<img className='w-[40px] ' src='./instagram.png' alt="" />
</nav>


    </div>
  )
}

export default Navbar