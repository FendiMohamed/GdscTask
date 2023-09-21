import React from 'react'
import Link from 'next/link'

const menu = () => {
  return (
   <div className="menu-wrap">
			<nav className='flex flex-col justify-center items-center' >
    <div className="menu__itemm"><Link href='/' className="menu__itemm-inner   button-close">Home</Link></div>
    <div className="menu__itemm"><Link href='/contact' className="menu__itemm-inner  button-close">Contact</Link></div>
			</nav>
			<button className="button-close">
				<svg width="25" height="16" viewBox="0 0 25 16"><path d="M2.238 7.079h2.727M2.482 9.496l-.666-2.7"/><path d="M23.753 5.403s-1.87 16.88-22.03 1.785"/></svg>
			</button>
		</div>
   
  )
}

export default menu