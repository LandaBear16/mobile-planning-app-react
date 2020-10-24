import { lazy } from 'react'

const Home = lazy(() => import('../view/page/home'))
const Goal = lazy(() => import('../view/page/goal'))


export {
  Home,
  Goal
}
