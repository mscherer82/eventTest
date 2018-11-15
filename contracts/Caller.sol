pragma solidity ^0.4.18;

import "./Callee.sol";

contract Caller {

   event Test1();

   Callee callee;
   
   function setAddress(address _addr) public {
	callee = Callee(_addr);
   }
   
   function doCall() public {
	emit Test1();
	callee.doSomething(); 	
   }
   
}
