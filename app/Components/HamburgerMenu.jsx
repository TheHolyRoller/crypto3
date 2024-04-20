

import "../Styles/HamburgerMenu.css";
import Head from 'next/head';



function HamburgerMenu() {

return (
<>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js Page</title>
      </Head>

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
{/* Add in the Links here */}

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