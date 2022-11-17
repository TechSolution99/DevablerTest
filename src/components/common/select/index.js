import React, { useState, useRef, useEffect } from 'react'

import './index.css'

function Select({placeholder, selectList, value, setValue, style}) {
  const searchInput = useRef(null)
  const container = useRef(null)
  const [showSelect, setShowSelect] = useState(false)

  useEffect(() => {
    function handleClickOutside(e) {
      if ( !container.current.contains(e.target) ) {
        setShowSelect(false)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const onChangeHandler = (e) => {
    setValue(e.target.value)
    setShowSelect(true)
  }

  return (
    <div
      className='custom_select'
      style={style}
      ref={container}
    >
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onFocus={() => setShowSelect(true)}
        ref={searchInput}
      />
      {
        showSelect && <div className='list'>
          {
            selectList?.filter(val => val.includes(value))?.map( item => (
              <div
                className='item'
                key={item}
                onClick={() => {
                  searchInput.current.focus()
                  setValue(item)
                  setShowSelect(false)
                }}
              >
                {item}
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Select