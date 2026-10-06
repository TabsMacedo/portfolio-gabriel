import './App.css';
import Menu from './components/Menu/Menu.jsx';
import Hero from './components/Hero/Hero.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>

      <Menu nome="Gabriel" />

      <main id="main">
        <Hero />
        <Content />
      </main>

      <Footer />
    </>
  );
}
