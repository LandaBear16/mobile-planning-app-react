import * as GOAL_TEXT from '../../../constant/goal-text'
import React, { Component } from 'react'
import CollapsibleText from '../../component/collapsable-text/index'


export default class Goal extends Component {
  render() {
    return (
      <div>
        <h2>Goal</h2>
        <CollapsibleText items={GOAL_TEXT.GOALS} />
      </div>
    )
  }
}
