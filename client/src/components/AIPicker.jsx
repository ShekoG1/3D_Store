import React from 'react'
import RegularButton from './RegularButton'

const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea placeholder='Ask AI' className='aipicker-textarea' cols="30" rows="5" value={prompt} onChange={(e)=> setPrompt(e.target.value)}>

      </textarea>

      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <RegularButton type="outline" title="Asking AI" customStyle="text-xs"/>
        ): 
        (<>
          <RegularButton type="outline" title="AI Logo" handleClick={()=>handleSubmit('logo')} customStyle="text-xs"/>
          <RegularButton type="filled" title="AI Full" handleClick={()=>handleSubmit('full')} customStyle="text-xs"/>
        </>)}
      </div>
    </div>
  )
}

export default AIPicker