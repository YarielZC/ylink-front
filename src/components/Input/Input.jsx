import React, { useState } from "react";
import { IconExclamationCircle, IconEye, IconEyeOff } from "@tabler/icons-react";
import './Input.css'

export default function Input({ className, label, error, inputClassName, inputIcon, ref, type, ...inputProps }) {
  const [showPass, setShowPass] = useState(false)

  const handleShowPassClick = () => {
    setShowPass(!showPass)
  }

  return (
    <div className={`input-container ${className}`}>

      {label && (
        <label htmlFor={inputProps.name} className="input-label">
          {label}
        </label>
      )}

      <div className="input-icon">
        {inputIcon}
      </div>

      {type == 'password' &&
        <button onClick={handleShowPassClick} type="button" className="eyePass">
          {showPass ? <IconEye /> : <IconEyeOff />}
        </button>}

      <input
        ref={ref}
        id={inputProps.name}
        className={`input-field ${type == 'password' ? 'input-is-pass' : ''} ${inputIcon ? 'input-have-icon' : ''} ${inputClassName || ''} ${error ? 'input-error' : ''}`}
        type={showPass ? 'text' : type}
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
}
