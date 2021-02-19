// This is the area of items you want to have added to the list.
var intrest = ["golf", "fishing", "IT", "cyber security",];

//This is the loop that will make this work. This loops through the 
function addItemsToList(array) {
    //this assigns the function which will getElmentById of "intrestsection to the varaible name intrestSection 
    var intrestSection = document.getElementById("intrestSection")
    // this assigns the function which creates a ul element to varaible name unorderedlist
    var unorderedList = document.createElement("ul");

    /* 
         This will loop over each index of the array passed into the function and create li element
        then store the value of that index into a varaible
        then add that li element to the unordered list
        and then add the value of the index into the li item.
    */
    for (let i = 0; i < array.length; i++) {
        //stores the function that creates a li element in the varabile name listItem
        let listItem = document.createElement("li");
        //stores the function that creates a text node in the varabile name text
        let text = document.createTextNode(array[i]);
        
        /*this executes the function undorderlist which create a ul element then it appends the funtion call whci creates a li item. so the 
        result of this call is  it appends the newly crea li element to you ul element */
        unorderedList.appendChild(listItem)

        //this excutes the function that appends the text varaible( which is the value from the array) to the li element.
        listItem.appendChild(text)
        
    }
    
    // this line of code gets the element with the id "intrestSection" and then appends the ul element to it.
    intrestSection.appendChild(unorderedList)

}

addItemsToList(intrest);




