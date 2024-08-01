import React from 'react'
import './headdash.css'
import person from '../assets/person.png'

const headdash = () => {
  return (
    <div>
        <div className='headdashboard'>
        <div className='dashtext'>Dashboard</div>
        <div className='dashitems'>
          <div className='dashitems1'>
            <input placeholder='Search any thing'></input>
          </div>
          <div className='dashitems2'></div>
          <div className='dashitems3'>
            <div className='dashitems31'>
              <img src={person} alt='person' />
            </div>
            <div className='dashitems32'>
              <div className='item32text1'>Alex meian</div>
              <div className='item32text2'>Prodcut manager</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default headdash