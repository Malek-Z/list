import React,{useState , useEffect} from 'react'
import dark from "../img/dark-mode.png"

function Navbar() {

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

    <div className="head">
        <h2>To Do-List</h2>
        <nav>
            <ul>
                <li><a href="pageone.html">Fonctinnalite</a></li>
                <li><a href="acceuil.html">Connection</a></li>
            </ul>
        </nav>
        <i
            id="toggle-theme"
            className={`${theme ? "active" : ""}`}
            onClick={toggleTheme}
        >
            <img src={dark} alt="dark" style={{width:"40px",height:"40px"}}/>
        </i>
    </div>
  )
}

export default Navbar