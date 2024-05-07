

import Image from "next/image";

import  Navbar  from '../app/Components/Navbar'; 
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

import BuyElementModal from '../app/Components/BuyElementModal'; 

import Chart from '../app/Components/ChartEmbedd'; 
import CoinbaseHeroComponent from '../app/Components/CoinbaseHeroComponent'; 


export default function Home() {
  
  
  
  return (

<>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MeelayonBase</title>

    <main id='mainIndexPageContainer' style={{overflowX:'hidden'}} >
   
 <nav id="indexNavContainer" >
    
    
   <CoinbaseHeroComponent/> 
   
    
    <Navbar/> 
    
    <div id='hamburgerContainer' style={{position: 'fixed', zIndex: '2000', top: '0'}}>
    
    <Hamburger/>
    </div>

</nav> 
    
   <article id='indexMainHeaderText'>
   
   
   <TextComponent/>
   
   </article> 
   
   
      <section  id='homeLargeCardContainer'> 
    <LargeCard/> 
    
    </section> 
    
    
    <section id='indexSquareCardContainer' >
    <SquareCard/> 
    
    </section>
    
    
     <article id='indexQuackCTA'>
    <QuackCTA/>
      </article> 
      
      <section id='indexPaymentPortal' >
      
     <Chart/>
      </section>
      
    <article id='indexTextComponentContainer'>
    
    <ContactHeadline/> 
    </article> 
    
    
    
     <footer id='indexFooterContainer' >
    <Footer/>

    </footer> 
    
   
    </main>

</>
  );
}
