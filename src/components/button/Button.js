import React from 'react'
import "./button.css";
import { Link } from 'react-router-dom';
export default function Button({ route, ParentClass, buttonClass, title, linkClass }) {
    return (
        <div className={ParentClass}>
            <buttton className={buttonClass}>
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
