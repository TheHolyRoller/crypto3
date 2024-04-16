

import Image from "next/image";

import Navbar from '../app/Components/Navbar'; 
import Hamburger from  "../app/Components/HamburgerMenu"; 
import HeroCTA from '../app/Components/HeroCTAComponent'; 



export default function Home() {
  return (
    <main id='mainIndexPageContainer' >


    {/* <Navbar/>  */}
    {/* <Hamburger/> */}
    <HeroCTA/>
   
    </main>
  );
}
