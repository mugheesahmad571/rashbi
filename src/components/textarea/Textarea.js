import React from 'react'
import "./textarea.css";
export default function Textarea({ parentalClass, textareaClass, rows }) {
    return (
        <div className={parentalClass}>
            <textarea className={textareaClass} rows={rows}></textarea>
        </div>
    )
}
