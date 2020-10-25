import React from 'react'

const FemaleAvatar = () => {
  return (
    <div>
      <ul>
        <li><p>Opens app already installed on their mobile phone</p></li>
        <li><p>Taken to main menu screen</p></li>
        <li><p>Selects ‘Track My Route’</p></li>
        <li><p>Attaches phone to arm with a strap and selects ‘Start Route’</p></li>
        <li><p>Runs 3 miles, once finished selects ‘Stop Route’</p></li>
        <li>
          <p>Modal pops up and asks the user if they would like to save route</p>
          <ul>
            <li><p>Yes; or</p></li>
            <li><p>No</p></li>
          </ul>
        </li>
         
        <li><p>User selects ‘Yes’</p></li>
        <li>
          <p>User is taken to ‘Run Summary’ screen, which shows</p>
          <ul>
            <li><p>Distance complete</p></li>
            <li><p>Map of route</p></li>
            <li><p>Average speed</p></li>
            <li><p>Time taken</p></li>
          </ul>
        </li>
        <li><p>User clicks back to ‘Main Menu’</p></li>
        <li>
          <p>Clicks on saved workouts</p>
          <ul>
            <li><p>Selects a previously favourited ‘hard level, ‘strength’ type, using the equipment already selected as being available from the user’s ‘Favourites’ list</p></li>
            <li><p>Taken to ‘Workout Details’ screen</p></li>
            <li>
              <p>User clicks ‘Start Workout’</p>
              <ul>
                <li><p>Timer appears as well as the exercises to be completed and starts</p></li>
                <li><p>User workouts following the timer and workout flow on screen</p></li>
                <li><p>As the user finishes the workout, they select ‘Stop Workout’</p></li>
                <li><p>The workout time saved against this workout in the user’s ‘Favourites’ list</p></li>
              </ul>
            </li>
          </ul>
        </li>
          
            
      </ul>
    </div>
  )
}

export default FemaleAvatar