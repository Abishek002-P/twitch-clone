import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile__topLeft">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQH_9_boGUaZeQ/company-logo_200_200/0/1611487070874?e=2159024400&v=beta&t=J8tOg3vjmfT2RgplKqZPqZJLcyMoAm1QDNREG28IaBs" />
                <div className="profile__topLeftDetails">
                    <h1>PATTARAI</h1>
                    
                </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            
            </div>
            <div className="profile__menu">
                <h2 className='active' > Home </h2>
                 <h2>About</h2>
                 <h2>Schedule</h2>
                 <h2>Videos</h2>
                 <h2><i class="fas fa-arrow-up"></i></h2>
                 <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>
                    Recent Broadcasts
                </h2>
                <div className="profile__recentItems">
                    <RecentItem
                    url={'https://www.youtube.com/embed/PS__qa3gQjw?list=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P'}
                    title={'React crash course | Beginner to Advanced | Organized by Pattarai | Daniel Mark | Day-1'}
                    />
                    <RecentItem
                    url={'https://www.youtube.com/embed/4aG9EiDgiLg?list=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P'}
                    title={'React crash course | Beginner to Advanced | Organized by Pattarai | Daniel Mark | Day-2'}
                    />
                    <RecentItem
                    url={'https://www.youtube.com/embed/h_a1SAOpPFs?list=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P'}
                    title={'React crash course | Beginner to Advanced | Organized by Pattarai | Daniel Mark | Day-3'}
                    />
                    <RecentItem
                    url={'https://www.youtube.com/embed/6nbOcnY_FCg?list=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P'}
                    title={'React crash course | Beginner to Advanced | Organized by Pattarai | Daniel Mark | Day-4'}
                    />
                </div>
                <div className="profile__categories">
                    <h2>PATTARAI's recently streamed categories</h2>
                    
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" />
                    
                    <h3>Science & Technology</h3>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile
