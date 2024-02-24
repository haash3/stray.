// TO-DO 👉 Add functionality to Hamburger   
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

// "Elevate your style, one step at a time.


const Nav = () => {
  return (
    <header className='padding-x py-2  w-full'>
      <nav className='flex justify-between
                      items-center 
                      '>

        <a href="/">
          <div className='logo-text flex'> stray.</div>
        </a>

        <ul className=' flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-700'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='Hamburger' width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav