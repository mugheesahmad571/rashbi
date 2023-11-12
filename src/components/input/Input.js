import React from 'react'

export default function Input({ type, placeholder, inputClass, parentalClass, id, onChange, onClick, name, style, onFocus }) {
    return (
        <div className={parentalClass}>
            <input type={type} placeholder={placeholder} className={inputClass} id={id} onChange={onChange} onClick={onClick} onFocus={onFocus} name={name} style={style} />
        </div>
    )
}
