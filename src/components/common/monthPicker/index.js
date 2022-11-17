import React, { useState, useRef, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Input from '../input'
import './index.css'

function MonthPicker({placeholder, value, setValue, minDate, maxDate}) {
  const container = useRef(null)
  const [show, setShow] = useState(false)
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  useEffect(() => {
    function handleClickOutside(e) {
      if ( !container.current.contains(e.target) ) {
        setShow(false)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className='month_picker' ref={container}>
      
      <div onClick={() => setShow(true)}>
        <Input 
          value={value ? monthNames[value.getMonth()] + ' '+ value.getFullYear() : ''}
          placeholder={placeholder}
          autoSize
          readOnly
          style={{backgroundColor: 'white'}}
        />
      </div>
      {
        show && <div className='calendar'>
          <Calendar
            onChange={(value) => setValue(value)}
            value={value}
            maxDetail='year'
            minDate={minDate}
            maxDate={maxDate}
          />
        </div>
      }
    </div>
  )
}

export default MonthPicker