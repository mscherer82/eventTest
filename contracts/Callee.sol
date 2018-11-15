pragma solidity ^0.4.18;

contract Callee {

   event Test2();

   function doSomething() public {
	  emit Test2();
   }
}
