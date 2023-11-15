import React from 'react';
import "./dropdown.css";
import img from "../../assets/images/icon _dots.png";

export default function Dropdown(props) {

  return (

    <div className="dropParent">
      <div className="dropend">
        <button type="button" className="dropdown-toggle dropdownBtn" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={img} />
        </button>
        <ul className="dropdown-menu">
          <li className='dropdownElem_li'>
            לַעֲרוֹך
          </li>
          <li>
            לִמְחוֹק
          </li>
        </ul>
      </div>
    </div>
  );
}