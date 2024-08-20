import React from 'react';
import Nav from './nav';

function Home() {
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        const offset = 100; // Adjust this offset to suit your needs
    
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      };
    return (
        <div id='home'>
            <div id='home-overlay'>
                <div className="logo">BITE DELIGHT</div>
                <Nav/>
                <h1 className='heroHeading'>WELCOME TO BITE DELIGHT</h1>
                <div className="btns">
                    <a className="btnitem" href='/book'>Book Table</a>
                    <a onClick={(e)=>{
                handleScroll(e,"menu")
            }} className="btnitem">Our Menus</a>
                </div>
                <br />
                <p className='heroSubheading'>DINE IN AND CARRY OUT NOW AVAILABLE IN ALL LOCATION</p>

                
            </div>
        </div>
    );
}

export default Home;
