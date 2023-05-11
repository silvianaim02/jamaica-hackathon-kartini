import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailArticlePage from './pages/DetailArticlePage';
import EditorPage from './pages/EditorPage';
import ThreadCommunityPage from './pages/ThreadCommunityPage';
import LoginPage from './pages/LoginPage';
import { useEffect, useState } from 'react';
import api from './utils/api';
import LoadingSpinner from './components/Loading/Loading';

function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  // showMe
  useEffect(() => {
    const fetchShowMe = async () => {
      const { error, data } = await api.showMe();
      if (!error) {
        setUser(data.user);
        setInitializing(false);
        setLoggedIn(true);
      } else {
        // alert(msg);
        setInitializing(false);
      }
    };

    if (!loggedIn) {
      fetchShowMe();
    }
  }, [loggedIn]);

  // login
  async function onLogin({ email, password }) {
    const { error, msg } = await api.login({ email, password });
    if (!error) {
      const resShowMe = await api.showMe();
      setUser(resShowMe.data.user);
      setLoggedIn(true);
      navigate('/');
    } else {
      alert(msg);
    }
  }

  if (initializing) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (user === null) {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailArticlePage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/editor" element={<Navigate to="/login" replace />} />
          <Route path="/communities" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={<LoginPage onLogin={onLogin} replace />}
          />
        </Routes>
      </>
    );
  }

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailArticlePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/communities" element={<ThreadCommunityPage />} />
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
