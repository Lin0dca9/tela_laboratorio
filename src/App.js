import React from "react";
import './App.css';
import Tela from './components/Tela'
import Tabela from "./components/Tabela";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import api from './components/services/api'
import {useEffect} from 'react'


function App (){
  useEffect(() => {
    Initi()
  }, []);

  async function Initi (){''
    const resposta = await api.get('/posts')
    console.log(resposta.data)
  }
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/tela" element={<Tela/>}/>
        <Route path ="/tabela" element={<Tabela/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App