import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import { useState } from 'react';

const LoginInput = ({ onLogin }) => {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');
  const [loading, setLoading] = useState(false);

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onLogin({ email, password });
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
      <form onSubmit={onLoginSubmit} className="w-full">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 ">Login</h1>
        <label className="block text-sm">
          <span className="text-gray-700 ">Email</span>
          <input
            className="block w-full mt-1 text-sm  focus:border-purple-400 focus:outline-none focus:shadow-outline-purple  form-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={onEmailChangeHandler}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 ">Password</span>
          <input
            className="block w-full mt-1 text-sm  focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input"
            placeholder="***************"
            type="password"
            value={password}
            onChange={onPasswordChangeHandler}
          />
        </label>

        <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#30C8D6] border border-transparent rounded-lg active:bg-[#2B546A] hover:bg-[#2B546A] focus:outline-none focus:shadow-outline-purple">
          {loading ? 'Wait...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginInput;
