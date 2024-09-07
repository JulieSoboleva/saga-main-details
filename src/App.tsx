import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import ItemDetails from './components/ItemDetails';
import './App.css';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <BrowserRouter basename='/saga-main-details'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:id/details' element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}