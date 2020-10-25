import { lazy } from 'react'

const Goal = lazy(() => import('../view/page/goal/index'))
const Personas = lazy(() => import('../view/page/personas/index'))
const Sketches = lazy(() => import('../view/page/sketches/index'))
const Critique = lazy(() => import('../view/page/critique/index'))
const Technologies = lazy(() => import('../view/page/technologies/index'))
const SmartWodHome = lazy(() => import('../view/page/critique/screenshots/smart-wod/SmartWodHome'))
const SmartWodBuildOne = lazy(() => import('../view/page/critique/screenshots/smart-wod/SmartWodBuildOne'))

export {
  Goal,
  Personas,
  Sketches,
  Critique,
  Technologies,
  SmartWodHome
}
