

import "../Styles/HeroCTAInfoContainer.css"; 


function HeroCTAInfoContainer() {
  return (
  
  
    <div id="heroCTACoinInfoContainer">
    
    <div id="heroCTACoinInfoSubContainer">
        
        {/* Add in the CTA List here  */}
    <ul id="heroCTAList">
    
    <li id="heroCTAListItem"> Token Info </li>
    <li id="heroCTAListItem"> <span id="heroCTATokenInfoSpan">
    $Meelay
    </span> </li>
    <li id="heroCTAListItem">
    <span id="heroCTASCAddress">
    
    Smart Contract Address
    
    </span>
    
    {/* Add in the Address here */}
    0xd74b782e05aa25c50e7330af541d46e18f36661c
    
    </li>
    <li id="heroCTAListItem">
    
    <span id="heroCTANetworkSpan">
    
    Network
    </span>
    BSC
    </li>
    <li id="heroCTAListItem">
    
    <span id="heroCTADecimalsSpan">
    
    Decimals
    
    </span>
    9
    
    </li>
    
    </ul>
    
    
    
    </div>
    
    
    
    
    </div>
  )
}

export default HeroCTAInfoContainer