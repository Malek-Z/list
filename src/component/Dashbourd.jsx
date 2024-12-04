import Navbar from "./Navbar";
import "../css/dash.css"
import Chart from "./Chart";
import React,{useState , useEffect} from 'react'
import dark from "../img/dark-mode.png"



const Dashbourd = () => {
  
  const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        setTheme(prev => !prev);
    };

    useEffect(() => {
      if (theme) {
          document.body.classList.add("dark-mode");
      } else {
          document.body.classList.remove("dark-mode");
      }

  }, [theme]);


  return (
    <>
      <header>
        <h1>To Do-List</h1>
        <nav>
          <ul>
            <li><a href="acceuil.html">Compte</a></li>
            <li><a href="stathtml.html">statistique</a></li>
            <li><a href="#projetos">Taches</a></li>
            <li><a href="#contato">Parametres</a></li>
          </ul>
              </nav>
              <i
                id="toggle-theme"
                className={`${theme ? "active" : ""}`}
                onClick={toggleTheme}
              >
                <img src={dark} alt="dark" style={{width:"40px",height:"40px"}}/>
              </i>
      </header>
      <section id="Dash">
        <h2>Les Catégories</h2>
        <Chart />
      </section>
    </>
    
  );
};

export default Dashbourd;