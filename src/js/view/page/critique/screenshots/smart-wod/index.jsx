import React from 'react'
// import SmartWodHomeScreen from '../../../../../../images/smart-wod-home.jpg'

const SmartWod = ({caption, image}) => {
  return (
    <div>
      <p>{caption}</p>
      <img className='screenshot' src={image} />
    </div>
  )
}

export default SmartWod
