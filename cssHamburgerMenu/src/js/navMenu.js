


// Example changing display property
var menuButton = document.getElementById("menuButton");

function openNavMenu(){
    menuButton.addEventListener('click', function openAndCloseMenu(){
        // when clicked needs to display hidden nav menu.
        let navMenu = document.getElementById('nav-menu');

        if (navMenu.style.display === "none"){
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }

    }) 
}

// openNavMenu();

// Example changing class property
function openNavMenuC(){
    menuButton.addEventListener('click', function openAndCloseMenu(){
        // when clicked needs to dchange class to be visable.
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

openNavMenuC();

// on button click close nav menu