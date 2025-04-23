var current = 0;
var total = 4;

var slides = document.getElementsByClassName("slide");

var next = document.getElementById("next");
var previous = document.getElementById("previous");

next.addEventListener("click", function(){
    
    if (current < total-1){
        current++;

        slides.item(current-1).style.display = "none";
        slides.item(current).style.display = "block";
    }
});
previous.addEventListener("click", function(){
    if (current > 0){
        current--;

        slides.item(current+1).style.display = "none";
        slides.item(current).style.display = "block";
    }
});
