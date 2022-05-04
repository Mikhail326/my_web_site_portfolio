import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Portfolio />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
