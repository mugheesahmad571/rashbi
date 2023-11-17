import React from 'react';
import "./dropdown.css";
import img from "../../assets/images/icon _dots.png";
import Button from '../button/Button';

export default function Dropdown(props) {

  var numberOfItems = props.numberOfItems

  return (

    <div className="dropParent">
      <div className="dropend" style={{ height: '115px' }}>
        <button type="button" className="dropdownBtn" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={img} />
        </button>
        {
          numberOfItems == 2 &&
          <ul className="dropdown-menu dropdownElem1">
            <li className='dropdownElem_li'>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn"} title={props.title1} />
            </li>
            <li>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn2"} title={props.title2} />
            </li>
          </ul>
        }

        {
          numberOfItems == 3 &&
          <ul className="dropdown-menu dropdownElem2">
            <li className='dropdownElem_li'>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn"} title={props.title1} />
            </li>
            <li className='dropdownElem_li'>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn3"} title={props.title3} />
            </li>
            <li>
              <Button route={"/category-form"} ParentClass={"p-0"} linkClass={"text-dark dropdownListBtn2"} title={props.title2} />
            </li>
          </ul>
        }

      </div>
    </div>
  );
}