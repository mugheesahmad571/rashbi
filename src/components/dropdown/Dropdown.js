import React from 'react';
import "./dropdown.css";
import img from "../../assets/images/icon _dots.png";

export default function Dropdown(props) {

  return (

    <div className="dropParent">
      <div className="dropend" style={{height: '115px'}}>
        <button type="button" className="dropdownBtn" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={img} />
        </button>
        <ul className="dropdown-menu dropdownElem">
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