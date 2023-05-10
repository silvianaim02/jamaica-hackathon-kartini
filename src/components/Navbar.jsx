import { Link } from 'react-router-dom';
import Logo from '../assets/Progate.png';
import { BiCaretDown, BiSearch } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="w-full py-6 items-center justify-between flex">
      {/**Logo */}
      <div className="justify-start w-full flex space-x-4">
        <img 
          src={Logo}
          alt='logo'
          className='w-32'
        />
        <div className="pl-8 bg-gray-100 rounded-3xl lg:flex hidden space-x-4 items-center justify-start">
          <BiSearch className='w-5 h-5 text-gray-400'/>
          <input 
            type='text'
            placeholder='Search Artikel...'
            className='bg-transparent outline-none text-gray-400'
          />
        </div>
      </div>
      <div className="items-center justify-end space-x-6 flex w-full">
        <ul className=''>
          <li className="inline-flex pr-8 items-center">
            <Link to="/" className="text-accent-2 pr-2">
              Language
            </Link>
            <span className=''>
              <BiCaretDown className='w-4 h-4 text-accent-2'/>
            </span>
          </li>
          <li className="inline-flex">     
            <Link to="/login" className="text-accent-2 pr-8">
              Log in
            </Link>
          </li>
          <li className="inline-flex">
            <Link
              to="/sign-up"
              className="text-white bg-accent-4 rounded-md px-8 py-2"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default Navbar;
