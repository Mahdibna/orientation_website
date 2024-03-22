import React from "react";
function Card({ text, number, handleCardClickEvent }) {
  return (
    <div
      className="card"
      value={text.split(" ").join("_")}
      onClick={(event) => {
        handleCardClickEvent(event, { number });
      }}
    >
      <p className=".tip">{text}</p>
    </div>
  );
}
export default Card;
// import React from "react";
// import isEmpty from "../Redux/util/isEmpty";
// function Inputs({ VALUE, NAME, ICON, TYPE, onChangeHundler, ERROR }) {
//   return (
//     <div className="mb-3">
//       <label className="form-label">{VALUE}</label>
//       <div className="input-group">
//         <span className="input-group-text" id="basic-addon1">
//           <i className={`fa-solid ${ICON}`}></i>
//         </span>
//         <input
//           name={NAME}
//           type={TYPE}
//           className={`form-control ${!isEmpty(ERROR) ? "is-invalid" : ""}`}
//           onChange={onChangeHundler}
//         />
//       </div>
//       {!isEmpty(ERROR) ? (<div style={{color:"#D37676"}}>{ERROR}</div>):''}
//     </div>
//   );
// }

// export default Inputs;
