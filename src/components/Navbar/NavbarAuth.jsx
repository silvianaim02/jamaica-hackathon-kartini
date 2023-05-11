import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import Cookies from 'js-cookie';
import { BiLogOut } from 'react-icons/bi';

const NavbarAuth = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await Cookies.remove('token');
    navigate('/login');
  };

  if (user !== null) {
    return (
      <>
        <li className="inline-flex">
          <button
            onClick={handleLogout}
            className="bg-accent-4 hover:bg-accent-4/80 py-2 px-4 rounded-lg"
          >
            <BiLogOut className="text-accent-1 w-5 h-5 justify-center items-center" />
          </button>
        </li>
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
};

export default NavbarAuth;
