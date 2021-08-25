import React from 'react'
import './Stream.css'

const Stream = () => {
    return (
        <div className='stream'>
            <div className='stream__container'>
            <div className='stream__status'>
                    <div className='stream__statusContainer'>
                        <div className='stream__statusContainerTop'>
                            <div className='stream__statusIndicator'>LIVE!!</div>
                                <h2>Check out the below streams from PATTARAI</h2>
                            </div>
                            <div className='stream__statusInfo'>
                                <i className="fas fa-bell"></i>
                                <p>You will be notified when PATTARAI is Live!</p>
                            </div>
                    </div>
                </div>
                <div className='stream__videoEmbed'>
                <iframe 
                width="900" 
                height="395" 
                src="https://www.youtube.com/embed/IAFHWnNyaxQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                    
                </iframe>
                    
                
                </div>
            </div>
        </div>
    )
}

export default Stream
