import React from "react";
import "./styles.css"; 
import DropdownMenuDemo from "./DropDown";
export default function Proposition() {

  return (
    <div className="proposition_parent">
      <div className="filter_input_parent">
        <div className="filtres">
          <DropdownMenuDemo/>
        </div>
      </div>
      <div className="popositions"></div>
    </div>
  );
}