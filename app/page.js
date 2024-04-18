
'use client'
import Image from "next/image";

import Navbar from '../app/Components/Navbar'; 
import Hamburger from  "../app/Components/HamburgerMenu"; 
import HeroCTA from '../app/Components/HeroCTAComponent'; 
import HeroCTAInfoContainer from "../app/Components/HeroCTAInfoContainer"; 
import LargeCard from '../app/Components/LargeCard'; 
import SquareCard from '../app/Components/SquareCard'; 
import Footer from '../app/Components/Footer'; 
import QuackCTA from '../app/Components/QuackCTA'; 
import TextComponent from '../app/Components/TextComponent'; 
import Hero from '../app/Components/HeroComponent'; 
import ContactHeadline from '../app/Components/ContactHeadline'; 



export default function Home() {
  return (
    <main id='mainIndexPageContainer' >
     
     <ContactHeadline>
     
     
     </ContactHeadline>
     
     
 <nav id="indexNavContainer" >
    {/* <Navbar/>  */}
    {/* <Hamburger/> */}

</nav> 




<header id='homeHeroContainer' >
      {/* <Hero/> */}
</header>
    
    
   
   
      <section  id='homeLargeCardContainer'> 
    {/* <LargeCard/>  */}
    
    </section> 
    
    
    <section id='indexSquareCardContainer' >
    {/* <SquareCard/>  */}
    
    </section>
    
    
     <article id='indexQuackCTA'>
    {/* <QuackCTA/> */}
      </article> 
      
      
    <article id='indexTextComponentContainer'>
    {/* <TextComponent/>  */}
    
    </article> 
    
    
     <footer id='indexFooterContainer' >
    {/* <Footer/> */}
    </footer> 
    
   
    </main>
  );
}
