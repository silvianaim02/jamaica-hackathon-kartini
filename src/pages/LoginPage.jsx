import LoginInput from '../components/Login/LoginInput';
import PropTypes from 'prop-types';

const LoginPage = ({ onLogin }) => {
  return (
    <section className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-1/2 max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1524135329990-07660cd5bf10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              alt="Office"
            />
          </div>
          <LoginInput onLogin={onLogin} />
        </div>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
