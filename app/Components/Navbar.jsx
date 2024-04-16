

 import "../Styles/Navbar.css";
 import Hamburger from '../Components/HamburgerMenu.jsx'; 
 
 
 
function Navbar() {
  return (

    <nav id='navBarContainer' >

      <div id='navbarSubContainer' >
      
      <div id='hamburgerIconContainer'>
      
      <Hamburger/>
      
      </div>

      <div id='logoContainer' >

      <div id='navLogo'>
        <h1 id='logoCasing'>$meelay</h1>

      </div>


      </div>


      {/* Add in the Navbar Button Group Container here  */}
      <div id='navbarButtonGroup' >

      


      {/* Add in the button list here  */}

      <ul id='navbarButtonList' >

      <li id='navbarListItem' >

        Telegram 


      </li>
      <li id='navbarListItem' >

        Twitter 

      </li>
      <li id='navbarListItem' >

        Dexcreen 

      </li>
      <li id='navbarListItem' >

        DexTools 

      </li>
      <li id='navbarListItem' >

        Farcaster 

      </li>




      </ul>

      </div>
        
        
      </div>
        
        </nav>
  );

}

export default Navbar