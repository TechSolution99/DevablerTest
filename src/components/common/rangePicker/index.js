import React, { useState, useRef } from 'react'
import MonthPicker from '../monthPicker'
import './index.css'

function RangePicker({style}) {
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  
  return (
    <div className='range_picker' style={style}>
      <MonthPicker placeholder='Start Date' value={start} setValue={setStart} maxDate={end}/>
      <div className='connector'>-</div>
      <MonthPicker placeholder='End Date' value={end} setValue={setEnd} minDate={start}/>
    </div>
  )
}

export default RangePicker