import { useState, useEffect } from "react";
import "../css/pageone.css";
import vue from '../img/vue.jpg';
import sticker from '../img/sticker.webp';
import priori from '../img/priori.jpg';
import reduction from '../img/reduction.jpg';
import concentra from '../img/concentra.jpg';
import satis from '../img/satis.jpg';
import decharg from '../img/decharg.jpg';
import Navbar from "../component/Navbar";

const PageOne = () => {

    const [activeCategory, setActiveCategory] = useState('all'); 
    const [projects, setProjects] = useState([
        { id: 1, category: 'work', image: vue, title: 'Vue d\'ensemble', description: 'Une to-do list offre une vision globale de toutes les tâches à accomplir, ce qui permet de ne rien oublier.' },
        { id: 2, category: 'prioritization', image: priori, title: 'Priorisation', description: 'En classNameant les tâches par importance ou par date limite, il est plus facile de se concentrer sur l\'essentiel.' },
        { id: 3, category: 'stress-reduction', image: reduction, title: 'Réduction du stress', description: 'En visualisant toutes les tâches, on se sent moins submergé par la charge de travail.' },
        { id: 4, category: 'focus', image: concentra, title: 'Concentration', description: 'En se concentrant sur une tâche à la fois, on est plus efficace et on évite la dispersion, une mativation.' },
        { id: 5, category: 'satisfaction', image: satis, title: 'Satisfaction', description: 'Coche les tâches accomplies procure un sentiment de satisfaction et motive à continuer.' },
        { id: 6, category: 'mental-clearance', image: decharg, title: 'Déchargement mental', description: 'En notant toutes les tâches, on libère de l\'espace mental pour se concentrer sur les activités en cours.' },
    ]);
    
    const filterProjects = (category) => {
        setActiveCategory(category);
    };

    return (
        <div>
            <Navbar />

            <div className="cardImage">
                <img src={sticker} className="card-image" />
                <h3>"Organisez votre avenir, une tâche à la fois."</h3>
            </div>

            <div className="titre">
                <h1>"Pourquoi utiliser notre plateforme ?"</h1>
            </div>

            <div className="categoria-buttons">
                <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => filterProjects('all')}>Tout</button>
                <button className={activeCategory === 'work' ? 'active' : ''} onClick={() => filterProjects('work')}>Vue d'ensemble</button>
                <button className={activeCategory === 'prioritization' ? 'active' : ''} onClick={() => filterProjects('prioritization')}>Priorisation</button>
                <button className={activeCategory === 'stress-reduction' ? 'active' : ''} onClick={() => filterProjects('stress-reduction')}>Réduction du stress</button>
                <button className={activeCategory === 'focus' ? 'active' : ''} onClick={() => filterProjects('focus')}>Concentration</button>
                <button className={activeCategory === 'satisfaction' ? 'active' : ''} onClick={() => filterProjects('satisfaction')}>Satisfaction</button>
                <button className={activeCategory === 'mental-clearance' ? 'active' : ''} onClick={() => filterProjects('mental-clearance')}>Déchargement mental</button>
            </div>

            <div className="container">
                {projects
                    .filter(project => activeCategory === 'all' || project.category === activeCategory)
                    .map((project) => (
                        <div className="card" key={project.id}>
                            <img src={project.image} alt={project.title} />
                            <div>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    );
}

export default PageOne;
