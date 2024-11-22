
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-600 flex justify-around items-center text-white h-12'>
            <div>
                logo
            </div>
            <div className='flex justify-between  w-[15%]'>
                <div>
                <NavLink to='/'>Home</NavLink>
                </div>
              <div>
              <NavLink to='/cart'>Cart</NavLink>
              </div>
               
            </div>
        </nav>
    </div>
  )
}

export default Navbar