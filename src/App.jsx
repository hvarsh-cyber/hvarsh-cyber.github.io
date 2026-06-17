import { Routes, Route } from 'react-router-dom';
import TerminalHero from './components/TerminalHero';
import About from './components/About';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Projects from './components/Projects';
import Blog from './components/Blog';
import AskMeAnything from './components/AskMeAnything';
import Footer from './components/Footer';
import PostPage from './components/PostPage';
import './App.css';

function HomePage() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-inner">
          <span className="nav-logo">hvarsh-cyber</span>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#building">building</a>
            <a href="#projects">projects</a>
            <a href="#blog">writing</a>
            <a href="#ask">ask me</a>
          </div>
        </div>
      </nav>
      <TerminalHero />
      <About />
      <CurrentlyBuilding />
      <Projects />
      <Blog />
      <AskMeAnything />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/writing/:slug" element={<PostPage />} />
    </Routes>
  );
}

export default App;
