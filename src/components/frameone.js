import React from 'react'
import './frameone.css'
import boximg from '../assets/boximg.png'

const frameone = () => {
    return (
        <div>
            <div className='frameone'>
                <div className='one1'>
                    <div className='one1text'> Overview</div>
                    <div className='one1text'>
                        <select id="dropdown" class="dropdown">
                            <option value="option1">Last 30 days</option>
                            <option value="option2">Last 15 days</option>
                            <option value="option3">Last 7 days</option>
                            <option value="option4">Last 1 days</option>
                        </select>
                    </div>
                </div>
                <div className='one2'>
                    <div className='one2box'>
                        <div className='boxitem1'>
                            <img src={boximg} alt='boximg' />
                        </div>
                        <div className='boxitem2'>Total revenue</div>
                        <div className='boxitem3'>$53,00989</div>
                        <div className='boxitem4'>12% increase from last month</div>
                    </div>
                    <div className='one2box'>
                        <div className='boxitem1'>
                            <img src={boximg} alt='boximg' />
                        </div>
                        <div className='boxitem2'>Total revenue</div>
                        <div className='boxitem3'>$53,00989</div>
                        <div className='boxitem4'>12% increase from last month</div>
                    </div>
                    <div className='one2box'>
                        <div className='boxitem1'>
                            <img src={boximg} alt='boximg' />
                        </div>
                        <div className='boxitem2'>Total revenue</div>
                        <div className='boxitem3'>$53,00989</div>
                        <div className='boxitem4'>12% increase from last month</div>
                    </div>
                    <div className='one2box'>
                        <div className='boxitem1'>
                            <img src={boximg} alt='boximg' />
                        </div>
                        <div className='boxitem2'>Total revenue</div>
                        <div className='boxitem3'>$53,00989</div>
                        <div className='boxitem4'>12% increase from last month</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default frameone