import React from 'react'
import './body.css'
import Headdash from './headdash'
import Frameone from './frameone'
import Frametwo from './frametwo'
import Framethree from './framethree'

const body = () => {
  return (
    <div className='body'>
      <Headdash/>
      <Frameone/>
      <Frametwo/>
      <Framethree/>
    </div>
  )
}

export default body