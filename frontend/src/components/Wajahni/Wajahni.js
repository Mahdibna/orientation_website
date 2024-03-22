import React, { useCallback, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./wajahnistyle.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./Card";
import Gathering_Cards from "./Gathering_Cards";
export default function Wajahni() {
  const [selectedRadioInput, setSelectedRadioInput] = useState(null);
  const [baccalaurea, Setbaccalaurea] = useState(null);
  const [region, Setregion] = useState(null);
  const [option, Setoption] = useState(null);
  const handlebaccalaurea = useCallback(
    (e) => {
      Setbaccalaurea(e.target.props.text.replace(" ", "_"));
    },
    [baccalaurea]
  );
  const handleregion = useCallback(
    (e) => {
      Setregion(e.target.props.text.replace(" ", "_"));
    },
    [region]
  );
  const handleoption = useCallback(
    (e) => {
      Setoption(e.target.props.text.replace(" ", "_"));
    },
    [option]
  );
  const [form, setForm] = useState(null);
  const navigate = useNavigate();
  const displayErrorChooseForm = () => {
    if (!(region && option && baccalaurea && selectedRadioInput)) {
      if (!baccalaurea) toast.error("Il faut choisir votre baccalaurea");
      if (!region)
        toast.error(
          "Il faut choisir la région où tu as passé(e) ton baccalaurea"
        );
      if (!option)
        toast.error("Il faut choisir la matière optionnelle que tu choisis");
      if (!selectedRadioInput) toast.error("Il faut choisir votre sexe");
    } else {
      {
        setForm(baccalaurea + " " + option + " " + region);
      }
    }
  };
  const handleCardClickEvent = useCallback((event, index) => {
    const Clicked_card = event.target;
    const cards = document.querySelectorAll(".cards")[0].children;
    [...cards].forEach((cdd) => {
      if (cdd !== Clicked_card && Clicked_card.classList.contains("clicked")) {
        cdd.classList.contains("clicked")
          ? cdd.classList.remove("clicked")
          : null;
        cdd.classList.contains("glassed")
          ? cdd.classList.remove("glassed")
          : null;
        Clicked_card.classList.remove("clicked");
      } else if (
        cdd !== Clicked_card &&
        !Clicked_card.classList.contains("clicked")
      ) {
        console.log(cdd);
        cdd.classList.contains("clicked")
          ? cdd.classList.remove("clicked")
          : null;
        !cdd.classList.contains("glassed")
          ? cdd.classList.add("glassed")
          : null;
        Clicked_card.classList.add("clicked");
      }
    });
  }, []);
  useEffect(() => {
    if (form) {
      navigate(`/wajahni/calcScoreForm/${form}`);
    }
  }, [form, navigate]);

  return (
    <motion.div
      className="wajahni-parent"
      initial={{ opacity: 0, position: "relative", left: "-100%" }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 0, position: "relative", left: "100%" }}
    >
      <Gathering_Cards
        label="Quelle est votre baccalaurea ?"
        fn={handlebaccalaurea}
      >
        <Card
          text="bac math"
          number={1}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="bac informatique"
          number={1}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="bac technique"
          number={1}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="bac sport"
          number={1}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="bac science exprimental"
          number={1}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="bac economie gestion"
          number={1}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="bac lettre"
          number={1}
          handleCardClickEvent={handleCardClickEvent}
        />
      </Gathering_Cards>
      <Gathering_Cards
        label="La ... ou tu as passè ton baccalaurea"
        fn={handleregion}
      >
        <Card
          text="Nabeul"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Tunis"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Tunis"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Sfax"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Sousse"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Mednine"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Gabes"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Kairawen"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Gafsa"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Gassrine"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Mounastir"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Kef"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Jandouba"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Touzeur"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Beja"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Zaghwen"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Tatawin"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Sidi bouzid"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Mehdiya"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Bizert"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Selyana"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Gbeli"
          number={2}
          handleCardClickEvent={handleCardClickEvent}
        />
      </Gathering_Cards>
      <Gathering_Cards
        label="Quelle est votre matière optionel ?"
        fn={handleoption}
      >
        <Card
          text="Italien"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Espagnol"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Rousse"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Almagne"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Turkie"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Chine"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Dessin"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Musique"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Italien"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Espagnol"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Rousse"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Almagne"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Turkie"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Chine"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Dessin"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
        <Card
          text="Musique"
          number={3}
          handleCardClickEvent={handleCardClickEvent}
        />
      </Gathering_Cards>
      <div className="genre_parent">
        <p className="text">Quelle est votre sexe ?</p>
        <div className="radio-input">
          <div className="male_parent">
            <input
              value="value-3"
              name="value-radio"
              id="value-3"
              type="radio"
              className="input i_male"
              onClick={() => {
                setSelectedRadioInput("Homme");
              }}
            />
            <div className="male">
              <svg
                className="logo"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.125 21a7.125 7.125 0 1 0 0-14.25 7.125 7.125 0 0 0 0 14.25Z"></path>
                <path d="M21 7.5V3h-4.5"></path>
                <path d="M15.188 8.813 21 3"></path>
              </svg>
              <div className="title">Homme</div>
            </div>
          </div>
          <div className="female_parent">
            <input
              value="value-1"
              name="value-radio"
              id="value-1"
              type="radio"
              className="input i_female"
              onClick={() => {
                setSelectedRadioInput("Femme");
              }}
            />
            <div className="female">
              <svg
                className="logo"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15.75A7.125 7.125 0 1 0 12 1.5a7.125 7.125 0 0 0 0 14.25Z"></path>
                <path d="M12 15.75v6.75"></path>
                <path d="M14.719 19.5H9.28"></path>
              </svg>
              <div className="title">Femme</div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`contactButton ${
          baccalaurea && option && region && selectedRadioInput ? "clicked" : ""
        }`}
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
      <ToastContainer position="bottom-right" />
    </motion.div>
  );
}
