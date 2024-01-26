import { useEffect } from 'react';
import './styles.css';
const DropdownMenuDemo = () => {
  useEffect(() => {
    let cards = document.querySelectorAll('.card');

    function justTous(T) {
      cards.forEach((e) => {
        if (T != e) e.classList.remove('chosen');
      });
      T.classList.add('chosen')
    }

    function specificCard(tousCard, specific) {
      tousCard.classList.remove('chosen');
      specific.classList.toggle('chosen');
    }

    function toggleChosen() {
      let tousCard = document.querySelector('.first_card');
      (this !== tousCard && tousCard.classList.contains("chosen")) ? specificCard(tousCard, this) : this !== tousCard ? this.classList.toggle('chosen'): justTous(tousCard);
      let chosen=document.querySelector('.chosen') || undefined;
      if (!chosen) return justTous(tousCard);
    }

    cards.forEach((card) => {
      card.addEventListener('click', toggleChosen);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('click', toggleChosen);
      });
    };
  }, []);
  return (
    <nav>
      <ul>
        <li id="demo1">
          <a><input type='checkbox'></input><p>filtrer par zone</p></a>
          <div className="cards">
          <div className="card chosen first_card">
              <p className=".tip">Tous</p>
            </div>
            <div className="card"  >
              <p className=".tip">Nabeul</p>
            </div>
            <div className="card"  >
              <p className=".tip">Tunis</p>
            </div>
            <div className="card"  >
              <p className=".tip">Sfax</p>
            </div>
            <div className="card"  >
              <p className=".tip">Sousse</p>
            </div>
            <div className="card"  >
              <p className=".tip">Mednine</p>
            </div>
            <div className="card"  >
              <p className=".tip">Gabes</p>
            </div>
            <div className="card"  >
              <p className=".tip">Kairawen</p>
            </div>
            <div className="card"  >
              <p className=".tip">Gafsa</p>
            </div>
            <div className="card"  >
              <p className=".tip">Gassrine</p>
            </div>
            <div className="card"  >
              <p className=".tip">Mounastir</p>
            </div>
            <div className="card"  >
              <p className=".tip">Kef</p>
            </div>
            <div className="card"  >
              <p className=".tip">Jandouba</p>
            </div>
            <div className="card"  >
              <p className=".tip">Touzeur</p>
            </div>
            <div className="card"  >
              <p className=".tip">Beja</p>
            </div>
            <div className="card"  >
              <p className=".tip">Zaghwen</p>
            </div>
            <div className="card"  >
              <p className=".tip">Tatawin</p>
            </div>
            <div className="card"  >
              <p className=".tip">Sidi bouzid</p>
            </div>
            <div className="card"  >
              <p className=".tip">Mehdiya</p>
            </div>
            <div className="card"  >
              <p className=".tip">Bizert</p>
            </div>
            <div className="card"  >
              <p className=".tip">Selyana</p>
            </div>
            <div className="card"  >
              <p className=".tip">Gbeli</p>
            </div>
          </div>
        </li>
        <li id="demo1">
          <a><input type='checkbox'></input><p>filtrer par branche</p></a>
          <li id="demo2">
          <div className="card first">
              <p className=".tip"><input type='checkbox'></input>domaine santè</p>
          </div>          
          <div className="cards">
          <div className="card chosen first_card">
              <p className=".tip">Tous</p>
            </div>
            <div className="card"  >
              <p className=".tip">anestesie</p>
            </div>
            <div className="card"  >
              <p className=".tip">Medecine</p>
            </div>
            <div className="card"  >
              <p className=".tip">infermerie</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
          </div>
          
          <div className="card first">
              <p className=".tip"><input type='checkbox'></input>domaine IT</p>
          </div>          
          <div className="cards">
          <div className="card chosen first_card">
              <p className=".tip">Tous</p>
            </div>
            <div className="card"  >
              <p className=".tip">anestesie</p>
            </div>
            <div className="card"  >
              <p className=".tip">Medecine</p>
            </div>
            <div className="card"  >
              <p className=".tip">infermerie</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
          </div>
          <div className="card first">
              <p className=".tip"><input type='checkbox'></input>domaine agriculture</p>
          </div>          
          <div className="cards">
          <div className="card chosen first_card">
              <p className=".tip">Tous</p>
            </div>
            <div className="card"  >
              <p className=".tip">anestesie</p>
            </div>
            <div className="card"  >
              <p className=".tip">Medecine</p>
            </div>
            <div className="card"  >
              <p className=".tip">infermerie</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
          </div>
          <div className="card first">
              <p className=".tip"><input type='checkbox'></input>domaine Arts</p>
          </div>          
          <div className="cards">
          <div className="card chosen first_card">
              <p className=".tip">Tous</p>
            </div>
            <div className="card"  >
              <p className=".tip">anestesie</p>
            </div>
            <div className="card"  >
              <p className=".tip">Medecine</p>
            </div>
            <div className="card"  >
              <p className=".tip">infermerie</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
          </div>
          <div className="card first">
              <p className=".tip"><input type='checkbox'></input>domaine enseignement</p>
          </div>          
          <div className="cards">
          <div className="card chosen first_card">
              <p className=".tip">Tous</p>
            </div>
            <div className="card"  >
              <p className=".tip">anestesie</p>
            </div>
            <div className="card"  >
              <p className=".tip">Medecine</p>
            </div>
            <div className="card"  >
              <p className=".tip">infermerie</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
            <div className="card"  >
              <p className=".tip">AUTRE 1</p>
            </div>
          </div>
          </li>
        </li>
      </ul>
    </nav>
  );
};
export default DropdownMenuDemo;
