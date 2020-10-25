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
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
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
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>

        <CollapsibleText items={PERSONAS_TEXT.PERSONAS_FEMALE} className='pt-3'/>
      </div>
    </div>
  )
}

export default Personas
