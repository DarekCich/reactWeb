import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Cats } from './Cats';
import { Dogs } from './Dogs';
import { Memes } from './Memes';
import { Home } from './Home';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visibleNavbar = prevScrollPos > currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setShowNavbar(visibleNavbar);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <nav className={showNavbar ? 'Navbar' : 'Navbar hidden'}>
      <ul>
        <li>
          <Link to="reactWeb/">Home</Link>
        </li>
        <li>
          <Link to="reactWeb/cats">Cats</Link>
        </li>
        <li>
          <Link to="reactWeb/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="reactWeb/memes">Memes</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="reactWeb/" element={<Home />} />
        <Route path="reactWeb/cats" element={<Cats />} />
        <Route path="reactWeb/dogs" element={<Dogs />} />
        <Route path="reactWeb/memes" element={<Memes />} />
      </Routes>
    </div>
  );
};

export default App;
