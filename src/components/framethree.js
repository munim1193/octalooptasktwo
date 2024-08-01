import React from 'react'
import './framethree.css'
import frame3tick from '../assets/frame3tick.png'
import calender from '../assets/calender.png'
const framethree = () => {
    return (
        <div className='framethree'>
            <div className='fthree1'>
                <div className='fthree11'>
                    Today task
                </div>
                <div className='fthree12'>
                    <a href='/'>All</a>
                    <a href='/'>Important</a>
                    <a href='/'>Notes</a>
                    <a href='/'>Links</a>
                </div>
                <div className='fthree13'>
                    <div className='f131'>
                        <div className='f1311'>
                            <img src={frame3tick} alt='frame3tick' />
                            <div className='f13111'>Create a user flow of social application design</div>
                        </div>
                        <div className='f1312'>In review</div>
                    </div>
                    <div className='f131'>
                        <div className='f1311'>
                            <img src={frame3tick} alt='frame3tick' />
                            <div className='f13111'>Create a user flow of social application design</div>
                        </div>
                        <div className='f1312'>In review</div>
                    </div>
                    <div className='f131'>
                        <div className='f1311'>
                            <img src={frame3tick} alt='frame3tick' />
                            <div className='f13111'>Create a user flow of social application design</div>
                        </div>
                        <div className='f1312'>In review</div>
                    </div>
                    <div className='f131'>
                        <div className='f1311'>
                            <img src={frame3tick} alt='frame3tick' />
                            <div className='f13111'>Create a user flow of social application design</div>
                        </div>
                        <div className='f1312'>In review</div>
                    </div>
                    <div className='f131'>
                        <div className='f1311'>
                            <img src={frame3tick} alt='frame3tick' />
                            <div className='f13111'>Create a user flow of social application design</div>
                        </div>
                        <div className='f1312'>In review</div>
                    </div>
                </div>
            </div>
            <div className='fthree2'>
            <img src={calender} alt='calender' className='calimg'/>
                {/* <div className='f21'>
                    <div className='f211'>Projects Workload</div>
                    <div className='f212'>
                        <select id="dropdown" class="dropdown">
                            <option value="option1">Last 33 days</option>
                            <option value="option2">Last 12 days</option>
                            <option value="option3">Last 7 days</option>
                            <option value="option4">Last 1 days</option>
                        </select>
                    </div>
                </div> */}
                {/* <div className='f22'>
                    <img src={calender} alt='calender'/>
                </div> */}
            </div>
        </div>
    )
}

export default framethree