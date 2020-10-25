import * as CRITIQUE_TEXT from '../../../constant/critique-text'
import React from 'react'
import CollapsibleText from '../../component/collapsable-text/index'

const Critique = () => {
  return (
    <div>
      <div>
        <h3 className='text-left'>Smart Wod</h3>
        <h6>Positives</h6>
        <CollapsibleText items={CRITIQUE_TEXT.SMART_WOD_POS} />
        <h6 className='mt-3'>Negatives</h6>
        <CollapsibleText items={CRITIQUE_TEXT.SMART_WOD_NEG} />
      </div>
      <div className='mt-5'>
      <h3 className='text-left'>Random Workout Generator</h3>
        <h6>Positives</h6>
        <CollapsibleText items={CRITIQUE_TEXT.RANDOM_WOD_POS} />
        <h6 className='mt-3'>Negatives</h6>
        <CollapsibleText items={CRITIQUE_TEXT.RANDOM_WOD_NEG} />
      </div>
    </div>
  )
}

export default Critique
