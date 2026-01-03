import React from "react";
import { forwardRef } from "react";
import { IconExclamationCircle } from "@tabler/icons-react";
import './Input.css'

const Input = forwardRef((props, ref) => {

    const { className, label, error, inputClassName, ...inputProps } = props;

    return (
        <div className={`input-container ${className}`}>

            {label && (
                <label htmlFor={inputProps.name} className="input-label">
                    {label}
                </label>
            )}

            <input
                ref={ref} 
                id={inputProps.name}
                className={`input-field ${inputClassName || ''} ${error ? 'input-error' : ''}`}
                inputClassName
                {...inputProps} 
            />

            {error && (
                <span className="input-error-message">
                    <IconExclamationCircle
                        size={16}
                        color="#ef4444"
                    />
                    {error.message || error} 
                </span>
            )}
        </div>
    )
}  )

export default Input;