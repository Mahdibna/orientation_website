import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./wajahnistyle.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Wajahni() {
  const [selectedRadioInput, setSelectedRadioInput] = useState(null);
  const [selectedCard, setSelectedCard] = useState([null, null, null]);
  const [form, setForm] = useState(null);
  const navigate = useNavigate();
  const displayErrorChooseForm = () => {
    if (selectedCard.some((selected) => !selected) || !selectedRadioInput) {
      if (!selectedCard[0]) toast.error("Il faut choisir votre baccalaurea");
      if (!selectedCard[1]) toast.error("Il faut choisir la région où tu as passé(e) ton baccalaurea");
      if (!selectedCard[2]) toast.error("Il faut choisir la matière optionnelle que tu choisis");
      if (!selectedRadioInput) toast.error("Il faut choisir votre sexe");
    } else {
      let selected_choice_one = selectedCard[0]?.childNodes[0]?.innerHTML;
      let selected_choice_two = selectedCard[1]?.childNodes[0]?.innerHTML;
      let selected_choice_three = selectedCard[2]?.childNodes[0]?.innerHTML;
      if (selected_choice_one && selected_choice_two && selected_choice_three && selectedRadioInput) {
        setForm(selected_choice_one.split(" ").join("_") + ' ' + selected_choice_two.split(" ").join("_") + ' ' + selected_choice_three.split(" ").join("_") + ' ' + selectedRadioInput);
      }
    }
  };

  const handleCardClickEvent = (event, index) => {
    const Clicked_card = event.target;
    const cards = document.querySelectorAll(`.text_cards:nth-child(${index}) .card`);
    const newSelectedCard = selectedCard.slice();
    Clicked_card.classList.remove('glassed');
    Clicked_card.classList.toggle('clicked');
    cards.forEach((cdd) => {
      if (cdd !== Clicked_card && Clicked_card.classList.contains("clicked")) {
        cdd.classList.remove('clicked');
        cdd.classList.add("glassed");
        newSelectedCard[index - 1] = Clicked_card;
      } else if (!(Clicked_card.classList.contains("clicked"))) {
        cdd.classList.remove('clicked');
        cdd.classList.remove("glassed");
        newSelectedCard[index - 1] = null;
      }
    });
    setSelectedCard(newSelectedCard);
  }

  useEffect(() => {
    if (form) {
      navigate(`/wajahni/calcScoreForm/${form}`);
    }
  }, [form, navigate]);

  return (
  <motion.div className="wajahni-parent" initial={{ opacity: 0, position: 'relative', left: '-100%' }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 0, position: 'relative', left: '100%' }}>
        <div className="text_cards">
          <p className="text">Quelle est votre baccalaurea ?</p>
          <div className="cards">
            <div className="card" onClick={(event) => handleCardClickEvent(event, 1)}>
              <p className=".tip">bac math</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 1)}>
              <p className=".tip">bac informatique</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 1)}>
              <p className=".tip">bac technique</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 1)}>
              <p className=".tip">bac sport</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 1)}>
              <p className=".tip">bac science exprimental</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 1)}>
              <p className=".tip">bac lettre</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 1)}>
              <p className=".tip">bac economie gestion</p>
            </div>
          </div>
        </div>
        <div className="text_cards">
          <p className="text">La ... ou tu as passè ton baccalaurea</p>
          <div className="cards">
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Nabeul</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Tunis</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Sfax</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Sousse</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Mednine</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Gabes</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Kairawen</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Gafsa</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Gassrine</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Mounastir</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Kef</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Jandouba</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Touzeur</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Beja</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Zaghwen</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Tatawin</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Sidi bouzid</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Mehdiya</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Bizert</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Selyana</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 2)}>
              <p className=".tip">Gbeli</p>
            </div>
          </div>
        </div>
        <div className="text_cards">
          <p className="text">Quelle est votre matière optionel ?</p>
          <div className="cards">
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Italien</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Espagnol</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Rousse</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Almagne</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Turkie</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Chine</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Dessin</p>
            </div>
            <div className="card" onClick={(event) => handleCardClickEvent(event, 3)}>
              <p className=".tip">Musique</p>
            </div>
          </div>
<div className='genre_parent'>
<p className="text">Quelle est votre sexe ?</p>
<div className="radio-input">
  <div className='male_parent'>
    <input value="value-3" name="value-radio" id="value-3" type="radio" className="input i_male" onClick={()=>{setSelectedRadioInput('Homme')}}/>
    <div className="male">
      <svg className="logo" width="48" height="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.125 21a7.125 7.125 0 1 0 0-14.25 7.125 7.125 0 0 0 0 14.25Z"></path>
        <path d="M21 7.5V3h-4.5"></path>
        <path d="M15.188 8.813 21 3"></path>
      </svg>
      <div className="title">Homme</div>
    </div>
  </div>
  <div className='female_parent'>
    <input value="value-1" name="value-radio" id="value-1" type="radio" className="input i_female" onClick={()=>{setSelectedRadioInput('Femme')}}/>
    <div className="female">
      <svg className="logo" width="48" height="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15.75A7.125 7.125 0 1 0 12 1.5a7.125 7.125 0 0 0 0 14.25Z"></path>
        <path d="M12 15.75v6.75"></path>
        <path d="M14.719 19.5H9.28"></path>
      </svg>
      <div className="title">Femme</div>
    </div>
  </div>
  </div>
</div>
</div>
        <button
          className={`contactButton ${(selectedCard.every((selected) => selected) && selectedRadioInput) ? "clicked" : ""}`}
          onClick={displayErrorChooseForm}
        >
          poursuivre
          <div className="iconButton">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
        <ToastContainer position="bottom-right"/>
    </motion.div>

    
  );
}
