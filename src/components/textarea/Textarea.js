import React from 'react'
import "./textarea.css";
export default function Textarea({ parentalClass, textareaClass, rows, onChange }) {
    return (
        <div className={parentalClass}>
            <textarea onChange={onChange} className={textareaClass} rows={rows}></textarea>
        </div>
    )
}
