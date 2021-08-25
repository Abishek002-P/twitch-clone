import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
            <h5>FOLLOWED CHANNELS</h5>
            <Channel avatar='https://media-exp1.licdn.com/dms/image/C4D0BAQH_9_boGUaZeQ/company-logo_200_200/0/1611487070874?e=2159024400&v=beta&t=J8tOg3vjmfT2RgplKqZPqZJLcyMoAm1QDNREG28IaBs'
            name= 'PATTARAI'
            />
            
            <h5>RECOMMENDED CHANNELS </h5>
            <Channel avatar='https://yt3.ggpht.com/a-/AAuE7mDgupxXIbGQ08Lpm5R87UiOBpMI_ctuFeJjqg=s900-mo-c-c0xffffffff-rj-k-no'
            name= 'sampilyfy'
            />
            <p className='sidebar__topShowMore' > Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                <i className="fas fa-search"></i>
                <input type="text" placeholder='Search to Add Friends' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
