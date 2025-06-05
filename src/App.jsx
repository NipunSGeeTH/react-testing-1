import React, { useEffect, useState } from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Changed here
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Subject from './pages/Subject';
import Subjects from './pages/Subjects';
import Search from './pages/Search';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop'; 
import ScrollToTopButton from './components/ScrollToTopButton';
import TutorsPage from './pages/TutorsPage';
import WatchVideo from './pages/WatchVideo';
import NotFound from "./pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Router basename="/react-testing-1"> {/* 👈 Add this line only if your repo is NOT username.github.io */}
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subjects/:subjectName" element={<Subject />} />
            <Route path="/search" element={<Search />} />
            <Route path="/Tutors" element={<TutorsPage />} />
            <Route path="/watch/:videoId" element={<WatchVideo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
