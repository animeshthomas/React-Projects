import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Search from './components/Search';
import View from './components/View';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/view" element={<View />} />
      <Route path="/delete" element={<Delete />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
