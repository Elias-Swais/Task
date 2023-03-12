function changeColor(){
    var color = prompt("What color would you like to change the paragraph to?");
    var test =document.getElementsByClassName("middleParagraph")
    for(var i = 0; i<test.length; i++){
        test[i].style.color = color;
    }
    

}
