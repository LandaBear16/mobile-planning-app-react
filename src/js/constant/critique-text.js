import React from 'react'
import SmartWodHomeScreen from '../../images/smart-wod-home.jpg'
import SmartWodEquipmentScreen from '../../images/smart-wod-equipment.jpg'
import SmartWodCreatorScreen from '../../images/smart-wod-search.jpg'
import SmartWodGeneratedScreen from '../../images/smart-wod-generated-wod.jpg'
import SmartWodFilterScreen from '../../images/smart-wod-filters.jpg'
import SmartWodBuildScreen from '../../images/smart-wod-build.jpg'
import SmartWodSkillsScreen from '../../images/smart-wod-skills.jpg'
import SmartWodMenuScreen from '../../images/smart-wod-menu.jpg'
import SmartWod from '../view/page/critique/screenshots/smart-wod/index'
import RandomwWodMeasurements from '../../images/randomwod-measurements.jpg'
import RandomwWodStats from '../../images/randomwod-stats.jpg'
import RandomwWodType from '../../images/randomwod-type.jpg'
import RandomwWodGenerated from '../../images/randomwod-generated.jpg'
import RandomwWodPrebuilt from '../../images/randomwod-prebuilt.jpg'
import RandomwWodTimer from '../../images/randomwod-timers.jpg'
import RandomwWodbusy from '../../images/randomwod-busy-interface.jpg'
import RandomwWodReps from '../../images/randomwod-reps.jpg'

const cleanCaption = 'Smart wod provides a clean and intuitive user journey'
const equipmentListCaption = 'Equipment list presentation is especially user friendly, utilising pictures and words, assisting non-English speaking users and novice exercisers complete their selections'
const wodCreatorCaption = 'The ‘WOD Creator’ has a searchable and editable exercise library, making it quick for a user to create their own workouts (WODs)'
const nonCustomisedLevel = 'Does not allow for customised workouts based on level, reducing the audience that can use this app to a specific level of athlete.'
const crossfitSpecific = 'Very specific to CrossFit, with exercises, which some people may not be used to or want to complete'
const limitedSkills = 'Skills available in the app are very limited, reducing the ability to complete a fully bodied and varied workout'
const allTimed = 'Every exercise has a time assigned it, so strength training could be quite limited when trying to focus on form and not speed'
const noGeo = 'No geolocation functionality to track outdoor workouts'
const separateTimer = 'Although while completing a generated workout, there is a timer to track the workout, the timer function cannot be used without selecting workout meaning that the one app may not be able to track all of a user’s completed workouts'

const statsCaption = 'Provides different analytical stats to allow a user to quantify and track their progress which users would find very useful'
const measurementCaption = 'Allows a user to enter and track their body measurements to track their ‘gains’'
const youtubeLink = 'Provides links to YouTube videos to demonstrate exercises to which a user may not be familiar'
const basicLook = 'Very basic look and feel with a lot of wording on screen'
const repInput = 'User has to input the number of reps and sets they wish to complete, requiring the user to have a certain level of knowledge of workout planning'
const twoTimers = 'There are two timers displayed on the generated workout, which are quite confusing for a user to follow and understand'
const busyInterface = 'User interface quite busy, not clean and user friendly'
const preBuilt = 'No equipment list can be selected for pre-built workouts meaning that a generated workout may not be able to be completed by the user if they do not have all of the required equipment'

export const SMART_WOD_POS = [
  {
    uuid: 'SWP1',
    header: 'Generated workout screen',
    body: <SmartWod caption={cleanCaption} image={SmartWodGeneratedScreen} />
  },
  {
    uuid: 'SWP2',
    header: 'Equipment list screen',
    body: <SmartWod caption={equipmentListCaption} image={SmartWodEquipmentScreen} />
  },
  {
    uuid: 'SWP3',
    header: 'Workout creator screen',
    body: <SmartWod caption={wodCreatorCaption} image={SmartWodCreatorScreen} />
  }
]

export const SMART_WOD_NEG = [
  {
    uuid: 'SWN1',
    header: 'Filter Screen',
    body: <SmartWod caption={nonCustomisedLevel} image={SmartWodFilterScreen} />
  },
  {
    uuid: 'SWN2',
    header: 'Build your own workout screen',
    body: <SmartWod caption={crossfitSpecific} image={SmartWodBuildScreen} />
  },
  {
    uuid: 'SWN3',
    header: 'Skills screen',
    body: <SmartWod caption={limitedSkills} image={SmartWodSkillsScreen} />
  },
  {
    uuid: 'SWN4',
    header: 'Generated workout screen',
    body: <SmartWod caption={allTimed} image={SmartWodGeneratedScreen} />
  },
  {
    uuid: 'SWN5',
    header: 'Home screen',
    body: <SmartWod caption={noGeo} image={SmartWodHomeScreen} />
  },
  {
    uuid: 'SWN6',
    header: 'Main menu',
    body: <SmartWod caption={separateTimer} image={SmartWodMenuScreen} />
  }
]


export const RANDOM_WOD_POS = [
  {
    uuid: 'RP1',
    header: 'Stats screen',
    body: <SmartWod caption={statsCaption} image={RandomwWodStats} />
  },
  {
    uuid: 'RP2',
    header: 'Measurements screen',
    body: <SmartWod caption={measurementCaption} image={RandomwWodMeasurements} />
  },
  {
    uuid: 'RP3',
    header: 'Generated workout screen',
    body: <SmartWod caption={youtubeLink} image={RandomwWodGenerated} />
  }
]

export const RANDOM_WOD_NEG = [
  {
    uuid: 'RN1',
    header: 'Type of workout screen',
    body: <SmartWod caption={basicLook} image={RandomwWodType} />
  },
  {
    uuid: 'RN2',
    header: 'Input reps and sets screen',
    body: <SmartWod caption={repInput} image={RandomwWodReps} />
  },
  {
    uuid: 'RN3',
    header: 'Two timers screen',
    body: <SmartWod caption={twoTimers} image={RandomwWodTimer} />
  },
  {
    uuid: 'RN4',
    header: 'Home screen',
    body: <SmartWod caption={busyInterface} image={RandomwWodbusy} />
  },
  {
    uuid: 'RN5',
    header: 'Pre-built workout screens',
    body: <SmartWod caption={preBuilt} image={RandomwWodPrebuilt} />
  }
  
]