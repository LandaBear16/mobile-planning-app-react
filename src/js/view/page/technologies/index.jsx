import * as TECHNOLOGIES_TEXT from '../../../constant/technologies-text'
import React from 'react'
import CollapsibleText from '../../component/collapsable-text/index'

const Technologies = () => {
  return (
    <div>
      <h2 className='text-center mb-5'>Technologies</h2>
      <div>
        <h6><u>React Native</u></h6>
        <p>Allows the app to be written in React and JavaScript but rendered with React Native Android and/or IOS code:</p>
        <CollapsibleText items={TECHNOLOGIES_TEXT.REACT_NATIVE} />
      </div>
      <div className='mt-3'>
        <h6><u>Firebase</u></h6>
        <p>This will be used for a number of different aspects for the app:</p>

        <h6 className='mt-2'><u>Authentication</u></h6>
        <p>Authentication will be used to provide a secure authentication system for the app, making it easy to sign in and register a user. This will help the app support mobile phone authentication, as well as allowing the user to login with Google, Facebook and more.</p>
        <CollapsibleText items={TECHNOLOGIES_TEXT.FIREBASE_AUTH} />

        <h6 className='mt-2'><u>Cloud Firestore</u></h6>
        <p>Firestore is a cloud hosted NoSQL database, meaning that it stores data as objects instead of the usual relational database service database. Allows for live data, as well as offline support for an app, whilst still allowing for fast database querying.</p>
        <CollapsibleText items={TECHNOLOGIES_TEXT.FIREBASE_FIRESTORE} />
      </div>
      <div className='mt-3'>
        <h6><u>Redux</u></h6>
        <p>Redux is a state management framework, this allows the developer to centralise the state of the app in an immutable object. </p>
        <CollapsibleText items={TECHNOLOGIES_TEXT.REDUX} />
      </div>
    </div>
  )
}

export default Technologies
