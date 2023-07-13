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
          <Link to="reactWeb/">Home</Link>
        </li>
        <li>
          <Link to="reactWeb/cats">Cats</Link>
        </li>
        <li>
          <Link to="reactWeb/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="reactWeb/Memes">Memes</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="reactWeb/"       element={<Home/>}/>
        <Route path="reactWeb/cats"   element={<Cats/>}/>
        <Route path="reactWeb/dogs"   element={<Dogs/>}/>
        <Route path="reactWeb/memes"  element={<Memes/>}/>
      </Routes>

  </div>
  );
}

export default App;
