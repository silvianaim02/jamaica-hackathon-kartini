import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailArticlePage from './pages/DetailArticlePage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
