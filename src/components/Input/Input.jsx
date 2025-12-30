import React from "react";
import { forwardRef } from "react";
import './Input.css'

const Input = forwardRef((props, ref) => {

    const { label, error, ...inputProps } = props;

    return (
        <div className="input-container">

            {label && (
                <label htmlFor={inputProps.name} className="input-label">
                    {label}
                </label>
            )}

            <input
                ref={ref} 
                id={inputProps.name}
                className={`input-field ${error ? 'input-error' : ''}`}
                {...inputProps} 
            />

            {error && (
                <span className="input-error-message">
                    {error.message || error} 
                </span>
            )}
        </div>
    )
}  )

export default Input;