import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import './index.css'; 
import fotoPerfil from './assets/yasmin.jpeg';

const meusProjetos = [
  { id: 1, titulo: "Projeto 01 - E-commerce", descricao: "Uma loja virtual feita com HTML, CSS e JavaScript.", link: "#" },
  { id: 2, titulo: "Projeto 02 - Portfólio", descricao: "Meu portfólio de apresentação feito com tecnologias modernas", link: "#" },
  { id: 3, titulo: "Projeto 03 - Registro de Ponto", descricao: "Sistema web para registrar o ponto dos funcionários das empresas.", link: "#" }
];

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const alternarTema = () => setTemaEscuro(!temaEscuro);

  const [formData, setFormData] = useState({ nome: '', email: '', msg: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert("Preencha os campos obrigatórios!");
    } else {
      alert(`Obrigado, ${formData.nome}! Mensagem enviada.`);
      setFormData({ nome: '', email: '', msg: '' }); 
    }
  };

  return (
    <div className={`${temaEscuro ? 'dark-theme' : ''}`} style={{ minHeight: '100vh' }}>
      <header>
        <h1>YASMIN</h1>
          <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
                <li>
                  <button id="btn-tema" onClick={alternarTema}>
                    {temaEscuro ? 'Claro' : 'Escuro'}
                  </button>
                </li>
            </ul>
        </nav>
      </header>

      <main>
        
        <section id="sobre">
            <h2>Sobre Mim</h2>
           <img src={fotoPerfil} alt="Foto de Letícia" />
            <p>Estou fazendo curso de tecnologia em sistemas para internet e sou formada em outros dois cursos tecnicos.</p>
        </section>

        <section id="projetos">
          <h2>Meus Projetos</h2>
          <div className="projetos-container">            
            {meusProjetos.map((projeto) => (
              <ProjectCard 
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
              />
            ))}
          </div>
        </section>
        
        <section id="contato">
          <h2>Contato</h2>
          <form onSubmit={handleSubmit}>
            <div class="campo">
              <label for="nome">Nome:</label>
              <input 
                id="nome" 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div class="campo">
              <label for="email">E-mail:</label>
              <input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div class="campo">
              <label for="msg">Mensagem:</label>
              <textarea 
                id="msg" 
                value={formData.msg}
                onChange={(e) => setFormData({...formData, msg: e.target.value})}
              />
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por YASMIN</p>
      </footer>
    </div>
  );
}

export default App;