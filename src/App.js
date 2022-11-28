
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
       <Outlet/>
      </main>
      
    </div>
  );
}

export default App;

