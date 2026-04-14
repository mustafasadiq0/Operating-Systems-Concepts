import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Pages
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Architectures from './pages/Architectures';
import Types from './pages/Types';
import Functions from './pages/Functions';
import BuildingOS from './pages/BuildingOS';
import Courses from './pages/Courses';
import Project from './pages/Project';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground smooth-scroll">
        <Header />
        
        <div className="flex">
          <Sidebar />
          
          <main className="flex-1 lg:mr-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/architectures" element={<Architectures />} />
              <Route path="/types" element={<Types />} />
              <Route path="/functions" element={<Functions />} />
              <Route path="/building-os" element={<BuildingOS />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/project" element={<Project />} />
              <Route path="/recommendations" element={<Recommendations />} />
            </Routes>
          </main>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

