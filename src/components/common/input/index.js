import React, { useState } from 'react'

import './index.css'

function Input({label, value, setValue, placeholder, autoSize, style, className, readOnly}) {
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  return (
    <label
      className={'custom_input ' + className}
      style={{ position: 'relative' }}
    >
      {
        label &&
        <span style={{
            display: 'inline-block',
            width: label ? '100px' : ''
          }}
        >
          {label}
        </span>
      }
      {
        autoSize &&
        <span
          style={{
            visibility: 'hidden',
            whiteSpace: 'pre',
          }}
        >
          {value === '' || !value ? placeholder : value}
        </span>
      }
      <input
        placeholder={placeholder}
        style={{
          position: autoSize ? 'absolute' : 'static',
          left: '0px',
          width: autoSize ? '100%' : '',
          ...style,
        }}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
      />
    </label>
  )
}

export default Input