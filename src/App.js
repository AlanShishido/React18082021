import React, { useState, useEffect } from "react";
import Header from "./components/Header"
//Estado = useState

import './App.css'

import api from './services/api'

function App() {
  const [projects, setProjects] = useState([]);

  // useState retorna um array com 2 posições:
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  useEffect(() => {
    api.get('projects').then(res =>{
      setProjects(res.data);
    })
  },
  [])

  function handleAddProject(){
    // projects.push(`Novo projeto ${Date.now()}`);
    
    // Imutabilidade
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects)
  }

  return (
    <>
      < Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;