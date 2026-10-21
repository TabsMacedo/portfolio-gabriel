import './App.css';
import Menu from './components/Menu/Menu.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="app__skip-link" href="#main">
        Pular para o conteúdo
      </a>

      <Menu nome="Gabriel" />

      <main id="main">
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </>
  );
}
