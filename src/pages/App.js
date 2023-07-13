import '../styles/App.css';
import { Link, Route, Routes } from "react-router-dom"
import { Cats } from "./Cats"
import { Dogs } from "./Dogs"
import { Memes } from "./Memes"
import { Home } from "./Home"
function App() {
  return (
  <div className='App'>
    <nav className='Navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="/Memes">Memes</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/"       element={<Home/>}/>
        <Route path="/cats"   element={<Cats/>}/>
        <Route path="/dogs"   element={<Dogs/>}/>
        <Route path="/memes"  element={<Memes/>}/>
      </Routes>

  </div>
  );
}

export default App;
