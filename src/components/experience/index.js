import React, { useEffect, useRef, useState } from 'react'
import Select from '../common/select'
import Input from '../common/input'
import TextArea from '../common/textarea'
import RangePicker from '../common/rangePicker'
import IconAdd from './icon_add.svg'
import IconDelete from './icon_delete.svg'
import './index.css'

function Experience({experience, setExperience, addExp, deleteExp, isLast, setHeight, style}) {
  const ref = useRef(null)

  const onHeightChange = () => {
    setHeight(ref.current.offsetHeight)
  }

  return (
    <div className='experience' ref={ref} style={style}>
      <div className='experience_button'>
        <img className='experience_delete' src={IconDelete} onClick={deleteExp}/>
        {
          isLast && <img className='experience_add' src={IconAdd} onClick={addExp}/>
        }
      </div>
      <Input
        value={experience.company}
        setValue={(value) => setExperience('company', value)}
        placeholder='Company'
        style={{width: '100%'}}
      />
      <div style={{display:'flex'}}>
        <Select
          value={experience.title}
          setValue={(value) => setExperience('title', value)}
          placeholder='Title'
          style={{width: '70%'}}
          selectList={[
            'Engineer',
            'Develoepr',
            'Manager',
            'Director',
            'Account',
          ]}
        />
        <RangePicker style={{width: '30%', justifyContent:'end'}}/>
      </div>
      <TextArea
        value={experience.description}
        setValue={(value) => setExperience('description', value)}
        placeholder='Description'
        onChange={onHeightChange}
      />
    </div>
  )
}

export default Experience