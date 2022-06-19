import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Details from './pages/details';
import Filmes from './pages/filmes';
import Home from './pages/home';
import Lancamentos from './pages/lancamentos';
import Pesquisa from './pages/pesquisa';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path= "/" element={<Home/>}/>
    <Route path= "/lancamentos" element={<Lancamentos/>}/>
    <Route path= "/pesquisa" element={<Pesquisa/>}/>
    <Route path= "/filmes" element={<Filmes/>}/>
    <Route path= "/details/:id" element={<Details/>}/>
  </Routes>
  </BrowserRouter>
);

