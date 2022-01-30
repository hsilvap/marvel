import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from './components/Home/Home.component';
import { Detail } from './components/Detail/Detail.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
