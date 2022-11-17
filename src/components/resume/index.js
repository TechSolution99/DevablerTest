import React, { useCallback, useMemo, useState } from 'react'
import Experience from '../experience'
import Input from '../common/input'
import './index.css'

function Resume() {
  const [experienceList, setExperienceList] = useState([
    {
      title: '',
      company: '',
      description: '',
      startDate: '',
      endDate: ''
    }
  ])
  const [heightList, setHeightList] = useState([70])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')

  const addExp = () => {
    setExperienceList([
      ...experienceList,
      {
        title: '',
        company: '',
        description: '',
        startDate: '',
        endDate: ''
      }
    ])
    setHeightList([...heightList, 70])
  }

  const setExperience = (index, key, value) => {
    const newExperienceList = [...experienceList]
    newExperienceList[index][key] = value
    setExperienceList(newExperienceList)
  }

  const deleteExp = (index) => {
    if ( heightList.length === 1 )
      return
    setExperienceList([
      ...experienceList.slice(0, index),
      ...experienceList.slice(index+1),
    ])
    setHeightList([
      ...heightList.slice(0, index),
      ...heightList.slice(index+1),
    ])
  }
  
  const Paper = useCallback(() => {
    let currentHeight = 233.5, paperCount = 1
  
    const experienceElements = experienceList.map((experience, index) => {
      let marginTop = 0
      currentHeight += heightList[index]
      // console.log(currentHeight, index, heightList)
      if ( currentHeight > 1073 ) {
        paperCount ++
        marginTop = 1073 - currentHeight + 150 + heightList[index] + 10
        currentHeight = heightList[index]
      }
      currentHeight += 10
      return <Experience
        key={index}
        style={{ marginTop: `${marginTop}px`}}
        setHeight={(height) => { heightList[index] = height} }
        experience={experience}
        setExperience={(key, value) => setExperience(index, key, value)}
        addExp={addExp}
        deleteExp={() => deleteExp(index)}
        isLast={index+1 === experienceList.length ? true : false}
      />
    })
  
    const paperElements = Array.from(Array(paperCount).keys()).map(index => <div className='paper' key={index}/>)
    
    return <>
      <div className='paper_container'>
        {paperElements}
      </div>
      {experienceElements}
    </>
  }, [heightList])

  return (
    <div className='layout'>
      <Input
        className='name_input'
        placeholder='Firstname'
        value={firstName}
        setValue={setFirstName}
        autoSize
      />
      <Input
        className='name_input'
        placeholder='Lastname'
        value={lastName}
        setValue={setLastName}
        autoSize
      />
      <div style={{marginTop: '20px'}}>
        <Input
          placeholder='Email'
          label='Email'
          value={email}
          setValue={setEmail}
        />
      </div>
      <div>
        <Input
          placeholder='Social Links'
          label='Social Links'
          value={link}
          setValue={setLink}
        />
      </div>
      <div>
        <h4
          style={{
            fontSize: '12pt',
            fontFamily: 'Merriweather',
            fontWeight: 700,
            padding: '5px',
            borderBottom: '2px solid black',
            width: 'fit-content',
          }}
        >
          PROFESSIONAL EXPERIENCE
        </h4>
      </div>
      <Paper/>
    </div>
  )
}

export default Resume