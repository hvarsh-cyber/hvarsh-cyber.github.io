import { Routes, Route } from 'react-router-dom';
import TerminalHero from './components/TerminalHero';
import About from './components/About';
import Achievements from './components/Achievements';
import SecurityLab from './components/SecurityLab';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import MonashJourney from './components/MonashJourney';
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
            <a href="#achievements">achievements</a>
            <a href="#monash">monash</a>
            <a href="#certifications">certs</a>
            <a href="#projects">projects</a>
            <a href="#lab">security lab</a>
            <a href="#blog">writing</a>
            <a href="#ask">ask me</a>
          </div>
        </div>
      </nav>
      <TerminalHero />
      <About />
      <Achievements />
      <MonashJourney />
      <Certifications />
      <Projects />
      <SecurityLab />
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
