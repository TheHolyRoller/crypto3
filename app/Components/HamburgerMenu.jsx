

import "../Styles/HamburgerMenu.css";


function HamburgerMenu() {

return (
<>
    <aside id='hamburgerMenuContainer' >
    <label className="hamburgerMenu">


<input type="checkbox" />

</label>

<article className="sidebar" id="hamburgerMenuContainer">

<nav id="hamburgerMenu">

{/* Add in the Hamburger Cards here */}

<div id='hamburgerListContainer'>
    
    

<ul id='hamburgerList' >

<li id='hamburgerListItem'>

Telegram

</li>
<li id='hamburgerListItem'>

Twitter


</li>
<li id='hamburgerListItem'>

Dexcreener


</li>
<li id='hamburgerListItem'>

DexTools


</li>
<li id='hamburgerListItem'>

Farcaster


</li>

</ul>

</div>

</nav>

</article>
    </aside>
    </>
    );
}

export default HamburgerMenu