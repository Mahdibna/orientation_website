import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./calcScoreFormStyle.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CalcScoreForm() {
  const [st, setst] = useState({ display: "none" });
  let { value } = useParams();
  value = value.split(" ");
  const [Control, setControl] = useState(false);
  const choose_form = () => {
    if (value) {
      switch (value[0]) {
        case "bac_informatique":
          return (
            <>
              <input
                required
                id="ALGO"
                placeholder="algorithme"
                type="number"
              />
              <input required id="STI" placeholder="sti" type="number" />
              <input required id="M" placeholder="math" type="number" />
              <input
                required
                id="SP"
                placeholder="science physique"
                type="number"
              />
              <input required id="F" placeholder="français" type="number" />
              <input
                required
                id="OP"
                placeholder="matière optionnelle"
                type="number"
              />
              <input required id="SPORT" placeholder="sport" type="number" />
              <input required id="A" placeholder="arabic" type="number" />
              <input required id="PH" placeholder="philosophie" type="number" />
              <input
                name="text"
                id="ANG"
                required
                placeholder="anglais"
                type="number"
              />
              <input required id="TIC" placeholder="TIC" type="number" />
            </>
          );
        case "bac_technique":
          return (
            <>
              <input required id="TE" placeholder="technique" type="number" />
              <input required id="M" placeholder="math" type="number" />
              <input
                required
                id="ALGO"
                placeholder="algorithme"
                type="number"
              />
              <input
                required
                id="SP"
                placeholder="science physique"
                type="number"
              />
              <input required id="F" placeholder="français" type="number" />
              <input
                required
                id="OP"
                placeholder="matiére optionel"
                type="number"
              />
              <input required id="SPORT" placeholder="sport" type="number" />
              <input required id="A" placeholder="arabic" type="number" />
              <input required id="PH" placeholder="filosophie" type="number" />
              <input
                name="text"
                id="ANG"
                required=""
                placeholder="anglais"
                type="number"
              />
            </>
          );
        case "bac_economie_gestion":
          return (
            <>
              <input required="" id="EC" placeholder="economie" type="number" />
              <input required="" id="GE" placeholder="gestion" type="number" />
              <input required="" id="M" placeholder="math" type="number" />
              <input
                name="text"
                id="HG"
                required=""
                placeholder="histoire geographie"
                type="number"
              />
              <input
                required=""
                id="INF"
                placeholder="informatique"
                type="number"
              />
              <input required="" id="F" placeholder="français" type="number" />
              <input
                required=""
                id="OP"
                placeholder="matiére optionel"
                type="number"
              />
              <input required="" id="¨SP" placeholder="sport" type="number" />
              <input required="" id="A" placeholder="arabic" type="number" />
              <input
                required=""
                id="PH"
                placeholder="philosophie"
                type="number"
              />
              <input
                name="text"
                id="ANG"
                required=""
                placeholder="anglais"
                type="number"
              />
            </>
          );
        case "bac_math":
          return (
            <>
              <input required="" id="M" placeholder="math" type="number" />
              <input
                required=""
                id="ALGO"
                placeholder="algorithme"
                type="number"
              />
              <input
                required=""
                id="SVT"
                placeholder="science exprimental"
                type="number"
              />
              <input
                required=""
                id="SP"
                placeholder="science physique"
                type="number"
              />
              <input required="" id="F" placeholder="français" type="number" />
              <input
                required=""
                id="OP"
                placeholder="matiére optionel"
                type="number"
              />
              <input required="" id="SPORT" placeholder="sport" type="number" />
              <input required="" id="A" placeholder="arabic" type="number" />
              <input
                required=""
                id="PH"
                placeholder="filosophie"
                type="number"
              />
              <input
                name="text"
                id="ANG"
                required=""
                placeholder="anglais"
                type="number"
              />
            </>
          );
        case "bac_science_exprimental":
          return (
            <>
              <input
                required=""
                id="svt"
                placeholder="science exprimental"
                type="number"
              />
              <input required="" id="M" placeholder="math" type="number" />
              <input
                required=""
                id="ALGO"
                placeholder="algorithme"
                type="number"
              />
              <input
                required=""
                id="SP"
                placeholder="science physique"
                type="number"
              />
              <input required="" id="F" placeholder="français" type="number" />
              <input
                required=""
                id="OP"
                placeholder="matiére optionel"
                type="number"
              />
              <input required="" id="SPORT" placeholder="sport" type="number" />
              <input required="" id="A" placeholder="arabic" type="number" />
              <input
                required=""
                id="PH"
                placeholder="filosophie"
                type="number"
              />
              <input
                name="text"
                id="ANG"
                required=""
                placeholder="anglais"
                type="number"
              />
            </>
          );
        case "bac_lettre":
          return (
            <>
              <input required="" id="HG" placeholder="histoire" type="number" />
              <input
                required=""
                id="GEO"
                placeholder="geography"
                type="number"
              />
              <input
                required=""
                id="PH"
                placeholder="filosophie"
                type="number"
              />
              <input
                required=""
                id="SP"
                placeholder="science physique"
                type="number"
              />
              <input required="" id="F" placeholder="français" type="number" />
              <input
                required=""
                id="OP"
                placeholder="matiére optionel"
                type="number"
              />
              <input required="" id="SPORT" placeholder="sport" type="number" />
              <input required="" id="A" placeholder="arabic" type="number" />
              <input
                name="text"
                id="ANG"
                required=""
                placeholder="anglais"
                type="number"
              />
            </>
          );
        case "bac_sport":
          return (
            <>
              <input
                required=""
                id="SPORTTH"
                placeholder="sport Tehorique"
                type="number"
              />
              <input
                required=""
                id="SPORTPR"
                placeholder="sport Pratique"
                type="number"
              />
              <input required="" id="M" placeholder="math" type="number" />
              <input
                required=""
                id="SVT"
                placeholder="science biologiques"
                type="number"
              />
              <input
                required=""
                id="SP"
                placeholder="science physique"
                type="number"
              />
              <input required="" id="F" placeholder="français" type="number" />
              <input
                required=""
                id="OP"
                placeholder="matiére optionel"
                type="number"
              />
              <input required="" id="SPORT" placeholder="sport" type="number" />
              <input required="" id="A" placeholder="arabic" type="number" />
              <input
                required=""
                id="PH"
                placeholder="filosophie"
                type="number"
              />
              <input
                name="text"
                id="ANG"
                required=""
                placeholder="anglais"
                type="number"
              />
            </>
          );
      }
    }
  };
  const Calculer = (event) => {
    console.log(value[0]);
    event.preventDefault();
    let moyenne = null;
    switch (value[0]) {
      case "bac_math":
      case "bac_science_exprimental":
        const M_math = parseFloat(document.getElementById("M").value) || 0;
        const SVT = parseFloat(document.getElementById("SVT").value) || 0;
        const SP = parseFloat(document.getElementById("SP").value) || 0;
        const F_math = parseFloat(document.getElementById("F").value) || 0;
        const ANG = parseFloat(document.getElementById("ANG").value) || 0;
        moyenne =
          value[1] === "bac_math"
            ? 2 * M_math + 0.5 * SVT + 1.5 * SP + 0.5 * (F_math + ANG)
            : M_math + 1.5 * SVT + 1.5 * SP + 0.5 * (F_math + ANG);
        break;

      case "bac_informatique":
        const M_info = parseFloat(document.getElementById("M").value) || 0;
        const TIC = parseFloat(document.getElementById("TIC").value) || 0;
        const SP_info = parseFloat(document.getElementById("SP").value) || 0;
        const F_info = parseFloat(document.getElementById("F").value) || 0;
        const ANG_info = parseFloat(document.getElementById("ANG").value) || 0;
        const ALGO = parseFloat(document.getElementById("ALGO").value) || 0;
        moyenne =
          1.5 * M_info +
          1.5 * ALGO +
          0.5 * SP_info +
          0.5 * TIC +
          0.25 * (F_info + ANG_info);
        break;

      case "bac_technique":
        const M_technique = parseFloat(document.getElementById("M").value) || 0;
        const TE = parseFloat(document.getElementById("TE").value) || 0;
        const SP_technique =
          parseFloat(document.getElementById("SP").value) || 0;
        const F_technique = parseFloat(document.getElementById("F").value) || 0;
        const ANG_technique =
          parseFloat(document.getElementById("ANG").value) || 0;
        moyenne =
          1.5 * M_technique +
          1.5 * TE +
          1 * SP_technique +
          0.5 * (F_technique + ANG_technique);
        break;
      case "bac_lettre":
        const A = parseFloat(document.getElementById("A").value) || 0;
        const PH = parseFloat(document.getElementById("PH").value) || 0;
        const HG = parseFloat(document.getElementById("HG").value) || 0;
        const F_lettre = parseFloat(document.getElementById("F").value) || 0;
        const ANG_lettre =
          parseFloat(document.getElementById("ANG").value) || 0;
        moyenne = 1.5 * A + 0.5 * PH + HG + 0.5 * (F_lettre + ANG_lettre);
        break;
      case "bac_sport":
        const M_sport = parseFloat(document.getElementById("M").value) || 0;
        const SVT_sport = parseFloat(document.getElementById("SVT").value) || 0;
        const SP_sport = parseFloat(document.getElementById("SP").value) || 0;
        const SPORTTH =
          parseFloat(document.getElementById("SPORTTH").value) || 0;
        const SPORTPR =
          parseFloat(document.getElementById("SPORTPR").value) || 0;
        const ANG_sport = parseFloat(document.getElementById("ANG").value) || 0;
        const F_sport = parseFloat(document.getElementById("F").value) || 0;
        const SPORT = parseFloat(document.getElementById("SPORT").value) || 0;
        const PH_sport = parseFloat(document.getElementById("PH").value) || 0;
        moyenne =
          SVT_sport +
          0.5 * (SPORTTH + SPORTPR) +
          0.5 * SPORT +
          0.25 * (F_sport + ANG_sport) +
          PH_sport;
        break;
      case "bac_economie_gestion":
        const EC = parseFloat(document.getElementById("EC").value) || 0;
        const GE = parseFloat(document.getElementById("GE").value) || 0;
        const M_eco = parseFloat(document.getElementById("M").value) || 0;
        const HG_eco = parseFloat(document.getElementById("HG").value) || 0;
        const F_eco = parseFloat(document.getElementById("F").value) || 0;
        const ANG_eco = parseFloat(document.getElementById("ANG").value) || 0;
        moyenne =
          1.5 * EC +
          1.5 * GE +
          0.5 * M_eco +
          0.5 * HG_eco +
          0.5 * (F_eco + ANG_eco);
        break;
      default:
        break;
    }
    console.log("Moyenne:", moyenne);
    setst({ display: moyenne ? "inline-block" : "none" });
  };
  useEffect(() => {
    let numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach((el) => {
      el.addEventListener("input", () => {
        if (el.value > 20 || el.value < 0) {
          el.style.cssText =
            "color:red; border-color:#C70039;outline:#C70039;box-shadow: 0px 0px 3px 0px orange;";
        } else {
          el.style.cssText =
            "color:initial; border-color:#1AACAC;outline:initial";
        }
        if (
          Array.from(numberInputs).some((inp) => inp.style.color === "red") &&
          Control
        ) {
          if (Control) {
            setControl((prev) => (!prev ? prev : !prev));
            toast.error("Chaque note doit être entre 0 et 20");
          }
        } else {
          toast.dismiss();
          !Control ? setControl((prev) => (!prev ? !prev : prev)) : null;
        }
      });
    });
  });
  return (
    <section className="section_form" action="#">
      <form id="consultation-form" className="feed-form" action="#">
        {choose_form()}
        <button className="button_submit" onClick={Calculer}>
          Calculez moyenne et score
        </button>
        <ToastContainer position="bottom-right" />
      </form>
      <Link to="/wajahni/calcScoreForm/:value/propositions">
        <button className="suivant" style={st}>
          <span>Poursuivre</span>
        </button>
      </Link>
    </section>
  );
}
