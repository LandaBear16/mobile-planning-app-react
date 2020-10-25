import React from 'react'
import MaleAvatarList from '../view/component/lists/male-avatar'
import FemaleAvatarList from '../view/component/lists/female-avatar'

export const PERSONAS_MALE = [
  {
    uuid: 1,
    header: 'User Journey',
    body: <MaleAvatarList/>
  }
]

export const PERSONAS_FEMALE = [
  {
    uuid: 2,
    header: 'User Journey',
    body: <FemaleAvatarList />
  }
]