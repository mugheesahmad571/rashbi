import React from 'react'
import "./button.css";
import { Link } from 'react-router-dom';
export default function Button({ route, ParentClass, buttonClass, title, linkClass, onClick, disabled }) {
    return (
        <div className={ParentClass} onClick={onClick} >
            <buttton className={buttonClass} disabled={disabled}>
                {
                    route ?
                        <Link className={`text-decoration-none ${linkClass}`} to={route}>
                            {title}
                        </Link>
                        :
                        title
                }
            </buttton>
        </div>
    )
}
