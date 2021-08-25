import React, { useState } from "react";
import Header from "./components/Header"
//Estado = useState

import './App.css'
import backgroundImage from './assets/background.jpg'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  // useState retorna um array com 2 posições:
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  function handleAddProject(){
    // projects.push(`Novo projeto ${Date.now()}`);
    
    // Imutabilidade
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects)
  }

  return (
    <>
      < Header title="Projects" />

      <img src={backgroundImage} width={300} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;