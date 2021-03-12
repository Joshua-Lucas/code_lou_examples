
// This example changes the html display property, it works but I wouldn't use this becuse you will have issues with media queries.
var menuButton = document.getElementById("menuButton");

function openNavMenuByStyle(){
	menuButton.addEventListener('click', function openAndCloseMenu(){
		
		let navMenu = document.getElementById('nav-menu');

		if (navMenu.style.display === "none"){
			navMenu.style.display = "flex";
		} else {
			navMenu.style.display = "none";
		}

	}) 
}



// This example adds and removes classes that will change the dsiplay of the nav menu. I SUGGEST THIS FUNCTION
function openNavMenuByClass(){
	menuButton.addEventListener('click', function openAndCloseMenu(){
	   
		let navMenu = document.getElementById('nav-menu'); 
		
		if(navMenu.classList.contains('closedNav')) {
			navMenu.classList.remove("closedNav")
			navMenu.classList.add("openNav") 
		} else {
			navMenu.classList.remove("openNav")
			navMenu.classList.add("closedNav")

		}

	}) 
}

// Make sure to call whatever function you choose to use here either openNavMenuByClass() or openNavMenuByStyle();
openNavMenuByClass(); 
