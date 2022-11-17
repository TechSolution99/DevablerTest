import React, { useRef, useEffect } from 'react'

import './index.css'

function TextArea({placeholder, value, setValue, onChange, style}) {
  const textAreaRef = useRef(null)
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;

      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);

  const onChangeHandler = (e) => {
    setValue(e.target.value)
    onChange()
  }

  return (
    <textarea
      className='custom_textarea'
      rows={1}
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={onChangeHandler}
      ref={textAreaRef}
    />
  )
}

export default TextArea