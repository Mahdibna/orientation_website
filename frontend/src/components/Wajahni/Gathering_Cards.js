import { useEffect } from "react";

function Gathering_Cards({ children, label, fn }) {
  useEffect(() => {
    const updatedChildren = Children.map(children, (child) =>
     child.addEventListener('click',(e)=>{
        fn(e)
     })
    );
  }, [children, fn]);

  return (
    <div className="text_cards">
      <p className="text">{label}</p>
      <div className="cards">{children}</div>
    </div>
  );
}
export default Gathering_Cards;
