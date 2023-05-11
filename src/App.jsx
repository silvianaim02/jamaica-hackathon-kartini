import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailArticlePage from './pages/DetailArticlePage';
import EditorPage from './pages/EditorPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailArticlePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
