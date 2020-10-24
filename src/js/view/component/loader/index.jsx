import React from 'react'
import classnames from 'classnames'

const Loader = ({ relative }) => {
  return (
    <div className={classnames('loader', !relative && 'fullscreen-loader')}>
      <i className='spinner-border text-primary' />
    </div>
  )
}

export default Loader
