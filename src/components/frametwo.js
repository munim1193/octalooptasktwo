import React from 'react'
import './frametwo.css'
import progress from '../assets/progress.png'
import frame2meter from '../assets/frame2meter.png'

const frametwo = () => {
    return (
        <div className='frametwo'>
            <div className='ftwo1'>
                <div className='ftwo11'>
                    <div className='ftwo111'>Project summary</div>
                    <div className='ftwo112'>
                        <select id="dropdown" class="dropdown">
                            <option value="option1">Last 33 days</option>
                            <option value="option2">Last 12 days</option>
                            <option value="option3">Last 7 days</option>
                            <option value="option4">Last 1 days</option>
                        </select>
                        <select id="dropdown" class="dropdown">
                            <option value="option1">Last 33 days</option>
                            <option value="option2">Last 12 days</option>
                            <option value="option3">Last 7 days</option>
                            <option value="option4">Last 1 days</option>
                        </select>
                        <select id="dropdown" class="dropdown">
                            <option value="option1">Last 30 days</option>
                            <option value="option2">Last 12 days</option>
                            <option value="option3">Last 7 days</option>
                            <option value="option4">Last 1 days</option>
                        </select>
                    </div>
                </div>
                <div className='ftwo12'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '33%' }}>Name</th>
                                <th style={{ width: '22%' }}>Project manager</th>
                                <th style={{ width: '20%' }}>Due date</th>
                                <th style={{ width: '12%' }}>Status</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '33%' }}>Website builder developement</td>
                                <td style={{ width: '22%' }}>Sukumar rao</td>
                                <td style={{ width: '20%' }}>Mar 12, 2024</td>
                                <td style={{ width: '12%' }}><div className='progress'>On going</div></td>
                                <td> <img src={progress} alt='progress' className='progressimg' /></td>
                            </tr>
                            <tr>
                                <td style={{ width: '33%' }}>Website builder developement</td>
                                <td style={{ width: '22%' }}>Sukumar rao</td>
                                <td style={{ width: '20%' }}>Mar 12, 2024</td>
                                <td style={{ width: '12%' }}><div className='progress'>On going</div></td>
                                <td> <img src={progress} alt='progress' className='progressimg' /></td>
                            </tr>
                            <tr>
                                <td style={{ width: '33%' }}>Website builder developement</td>
                                <td style={{ width: '22%' }}>Sukumar rao</td>
                                <td style={{ width: '20%' }}>Mar 12, 2024</td>
                                <td style={{ width: '12%' }}><div className='progress'>On going</div></td>
                                <td> <img src={progress} alt='progress' className='progressimg' /></td>
                            </tr>
                            <tr>
                                <td style={{ width: '33%' }}>Website builder developement</td>
                                <td style={{ width: '22%' }}>Sukumar rao</td>
                                <td style={{ width: '20%' }}>Mar 12, 2024</td>
                                <td style={{ width: '12%' }}><div className='progress'>On going</div></td>
                                <td> <img src={progress} alt='progress' className='progressimg' /></td>
                            </tr>
                            <tr>
                                <td style={{ width: '33%' }}>Website builder developement</td>
                                <td style={{ width: '22%' }}>Sukumar rao</td>
                                <td style={{ width: '20%' }}>Mar 12, 2024</td>
                                <td style={{ width: '12%' }}><div className='progress'>On going</div></td>
                                <td> <img src={progress} alt='progress' className='progressimg' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='ftwo2'>
                <div className='ftwo21'>
                    <div>Overall Progress</div>
                    <div>
                        <select id="dropdown" class="dropdown">
                            <option value="option1">Last 33 days</option>
                            <option value="option2">Last 12 days</option>
                            <option value="option3">Last 7 days</option>
                            <option value="option4">Last 1 days</option>
                        </select>
                    </div>
                </div>
                <div className='ftwo22'>
                    <img src={frame2meter} alt='frame2meter'/>
                </div>
                <div className='ftwo23'>
                    <div className='ftwo231'>
                        <div className='ftwo2311'>95</div>
                        <div className='ftwo2312'>Total projects</div>
                    </div>
                    <div className='ftwo231'>
                        <div className='ftwo2311'>95</div>
                        <div className='ftwo2312'>Total projects</div>
                    </div><div className='ftwo231'>
                        <div className='ftwo2311'>95</div>
                        <div className='ftwo2312'>Total projects</div>
                    </div><div className='ftwo231'>
                        <div className='ftwo2311'>95</div>
                        <div className='ftwo2312'>Total projects</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default frametwo