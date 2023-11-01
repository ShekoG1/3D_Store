import React from 'react'
import RegularButton from './RegularButton'

const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea placeholder='Ask AI' className='aipicker-textarea' cols="30" rows="5" value={prompt} onChange={(e)=> setPrompt(e.target.value)}>

      </textarea>

      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (<RegularButton/>): (<></>)}
      </div>
    </div>
  )
}

export default AIPicker