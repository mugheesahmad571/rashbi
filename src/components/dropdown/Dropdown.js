import React from 'react'
import "./dropdown.css";
import img from "../../assets/images/icon _dots.png"
export default function Dropdown(props) {
    function dropdown() {
        const elements = document.getElementById(props.id);
        elements.classList.toggle("hide")

    }
    return (
        <div className='dropParent'>
            < div>
                <button onClick={dropdown} className='dropdownBtn'>
                    <img src={img} alt='bar'/>
                </button>
            </div >
            <div className='hide dropdownElem' id={props.id}>
                <ul>
                    <li>
                        לַעֲרוֹך
                    </li>
                    <li>
                        לִמְחוֹק
                    </li>
                </ul>
            </div>
        </div>

    )
}
