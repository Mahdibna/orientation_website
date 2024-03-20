import React from 'react';
import { Link } from 'react-router-dom';
import './HomeStyle.css';
import {motion} from'framer-motion';
const Home = () => {
  return (
    <motion.div className="parent"
    initial={{opacity:0 , position:'relative' , left:'-100%'}}
    animate={{opacity:1 , left:0}}
    exit={{opacity:0 , position:'relative' , left:'100%'}}
    >
      <div className="container">
        <h1>Aidez moi à choisir le bon choix</h1>
        <span className="typing">
          Le site d'orientation pour les élèves qui réussissent leur baccalauréat a pour objectif de guider les étudiants
          dans leurs choix académiques en leur fournissant les informations et les outils nécessaires. Il les aide à
          sélectionner la filière d'études qui leur convient, propose des ressources pour réussir les examens d'entrée aux
          universités, et facilite la découverte d'opportunités de développement personnel et professionnel. L'objectif
          ultime est d'accompagner les élèves vers un avenir prometteur en les aidant à prendre des décisions éducatives et
          professionnelles alignées sur leurs aspirations et leurs talents.
        </span>
      </div>
      <div className="buttons">
        <Link to="/wajahni">
          <button className='button'>s'orienter</button>
        </Link>
        <Link to="/faculte">
          <button className='button'>découvrir faculté</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
