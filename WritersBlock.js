"use strict"
/*
	Belinda Huang

	Writer's Block in 10 Part's Order Generator

*/

window.onload = function ()
{
	var element;

	element = document.getElementById ("order");
	element.innerHTML = createOrder();

}

function randomInt()
{
	return Math.ceil(Math.random() * 10);
}

function createOrder()
{
	var theOrder;
	var times;
	times = window.prompt("How many times do you wish to perform parts in Section A?");
	theOrder = "1, ";
	
	for(var i=0; i<times-2; i++)
	{
		theOrder = theOrder + randomInt() + ", ";
	}
	
	theOrder = theOrder + randomInt();
	
	return theOrder;
}




