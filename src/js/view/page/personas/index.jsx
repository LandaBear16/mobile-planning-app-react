import * as PERSONAS_TEXT from '../../../constant/personas-text'
import React from 'react'
import { Media } from 'reactstrap'
import femaleAvatar from '../../../../images/female-avatar.jpg'
import maleAvatar from '../../../../images/male-avatar.jpg'
import CollapsibleText from '../../component/collapsable-text/index'

const Personas = () => {
  return (
    <div>
      <h2 className='text-center mb-5'>Personas</h2>
      <div>
        <Media>
          <Media left href="#">
            <Media object src={maleAvatar} alt='Generic placeholder image' />
            <p className='muted-text text-center'><small>Image courtesy of Jordan Gibson: Behance</small></p>
          </Media>
          <Media body>
            <Media heading>
              Raymond Reddington
            </Media>
              Single, working Father, 40 years old. Has no time or money to join a gym, needing workouts that can fit around parenting and work and would like a quick and easy app that can generate a workout, customised to him without requiring any equipment.
          </Media>
        </Media>

        <CollapsibleText items={PERSONAS_TEXT.PERSONAS_MALE} className='pt-3' />
      </div>
      <div className='pt-5'>
        <Media>
          <Media left href="#">
            <Media object src={femaleAvatar} alt='Generic placeholder image' />
            <p className='muted-text text-center'><small>Image courtesy of Jordan Gibson: Behance</small></p>
          </Media>
          <Media body>
            <Media heading>
              Peggy Carter
            </Media>
            Existing user, she is an avid runner and who wants to use the app mainly to track their runs but also to generate workouts, which are customised to strength training. She has access to her home gym, with basic equipment.
          </Media>
        </Media>

        <CollapsibleText items={PERSONAS_TEXT.PERSONAS_FEMALE} className='pt-3'/>
      </div>
    </div>
  )
}

export default Personas
