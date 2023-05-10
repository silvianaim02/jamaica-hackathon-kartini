import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailArticlePage from './pages/DetailArticlePage';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <div className="px-16">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailArticlePage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </div>
  );
}

export default App;
