const Nav = ()=>{

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
        <div className="navbar">
            <a href="#home" onClick={(e)=>{
                handleScroll(e,"home")
            }} className="navItem">HOME</a>
            <a  href="#about" onClick={(e)=>{
                handleScroll(e,"about")
            }}   className="navItem">ABOUT</a>
            <a onClick={(e)=>{
                handleScroll(e,"gallery")
            }}  href="#gallery" className="navItem">GALLERY</a>
            <a onClick={(e)=>{
                handleScroll(e,"venue")
            }}  href="#venue" className="navItem">VENUES</a>
            <a onClick={(e)=>{
                handleScroll(e,"footer")
            }}  href="#footer" className="navItem">CONTACT</a>
        </div>
    )
}

export default Nav;