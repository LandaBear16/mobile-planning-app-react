import React from 'react'

const MaleAvatarList = () => {
  return (
    <div>
      <ul>
        <li><p>Downloads the app to his mobile phone from the play store</p></li>
        <li><p>Opens app</p></li>
        <li><p>Registers, setting up a new user account</p></li>
        <li><p>User gets taken to main menu screen</p></li>
        <li>
          <p>Clicks generate workout:</p>
          <ul>
            <li>
            <p>User gets taken to select ‘Level’ screen:</p>
              <ul>
                <li>Selects ‘Easy’</li>
                <li>Clicks Next</li>
              </ul>
            </li>
            <li>
            <p>Taken to select ‘Muscle Group’ screen:</p>
              <ul>
                <li>Selects Full Body</li>
                <li>Clicks Next</li>
              </ul>
            </li>
            <li>
            <p>Taken to select ‘Type’ screen:</p>
              <ul>
                <li>Selects ‘Mixture’</li>
                <li>Clicks Next</li>
              </ul>
            </li>
            <li>
            <p>•	Taken to select ‘Equipment’:</p>
              <ul>
                <li>Does not select any equipment screen</li>
                <li>Clicks ‘Generate Workout’</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <p>Workout gets generated and user taken to workout screen:</p>
          <ul>
            <li>User views the workout</li>
            <li>Clicks ‘Start Workout’</li>
            <li>Timer appears on screen and starts</li>
            <li>User workouts</li>
            <li>After the workout has completed, the user saves the workout to ‘Favourites’ list</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default MaleAvatarList
