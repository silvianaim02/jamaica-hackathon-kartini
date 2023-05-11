import { Link } from 'react-router-dom';
import Logo from '../../assets/Progate.png';
import NavbarAuth from './NavbarAuth';

const Navbar = ({ user, setUser }) => {
  return (
    <div className="container mx-auto w-full py-4 items-center justify-between flex">
      {/**Logo */}
      <div className="justify-start w-full flex space-x-4">
        <Link to='/'>
          <img src={Logo} alt="logo" className="w-32" />
        </Link>
      </div>
      <div className="items-center justify-end space-x-6 flex w-full">
        <ul className="">
          <NavbarAuth luser={user} setUser={setUser} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
