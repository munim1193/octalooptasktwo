import React from 'react'
import './sidenav.css'
import logo from '../assets/logo.png'
import button from '../assets/button.png'
import main from '../assets/collapse tab.png'
import c1 from '../assets/collapse tab (8).png'
import c2 from '../assets/collapse tab (7).png'
import c3 from '../assets/collapse tab (6).png'
import c4 from '../assets/collapse tab (5).png'
import c5 from '../assets/collapse tab (4).png'
import c6 from '../assets/collapse tab (3).png'
import c7 from '../assets/collapse tab (2).png'
import c8 from '../assets/collapse tab (1).png'

const sidenav = () => {
    return (
        <div className='sidenav'>
            <div className='itemone'>
                <img src={logo} alt='logo' />
            </div>
            <button className='itemtwo'>
                <img src={button} alt='button' className='itemtwoimg' />
                <div className='bartext'>Create new project</div>
            </button>
            <div className='itemthree'>
                <button className='itemthreebuttonmain'>
                    <img src={main} alt='button' className='itemtwoimg' />
                    <div className='bartext'>Dashboard</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c1} alt='button' className='itemtwoimg' />
                    <div className='bartext'>project</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c2} alt='button' className='itemtwoimg' />
                    <div className='bartext'>Task</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c3} alt='button' className='itemtwoimg' />
                    <div className='bartext'>Dashboard</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c4} alt='button' className='itemtwoimg' />
                    <div className='bartext'>Time Log</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c5} alt='button' className='itemtwoimg' />
                    <div className='bartext'>Resourse mgnt</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c6} alt='button' className='itemtwoimg' />
                    <div className='bartext'>User</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c7} alt='button' className='itemtwoimg' />
                    <div className='bartext'>Project template</div>
                </button>
                <button className='itemthreebutton'>
                    <img src={c8} alt='button' className='itemtwoimg' />
                    <div className='bartext'>Menu settings</div>
                </button>
            </div>
            <div className='itemfour'></div>
        </div>
    )
}

export default sidenav