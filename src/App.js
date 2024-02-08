import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar id="navbar" expand="lg">
          <Header />
        </Navbar>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
