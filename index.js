  


var name = prompt("What is your name !");

 var firstChar=name.slice(0,1);
 var upperCaseFirstChar =firstChar.toUpperCase();
 var restOfName=name.slice(1,name.length);
var restOfName=restOfName.toLowerCase();
var capitalName= upperCaseFirstChar + restOfName;
alert("Dear "+ capitalName +" ! Welcome on DrumKit ." );



var numberOfDrumButtons = document.querySelectorAll(".drum").lenth;

for(var i=0; i<numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventlistener("click",function(){
    
    var buttonInnerHTML=this.innerHTML;
         
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
  
  });
}

  document.addEventListener("keypress", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

  });




  function makeSound(key){
  
  switch(key){
    case"w":
      var tom1 = new Audio("sounds/tom-1.MP3");
      tom1.play();
    case"a":
      var tom2=new Audio("sounds/tom-2.MP3");
      tom2.play();
      break;
 
    case"s":
      var tom3=new Audio("sounds/tom-3.MP3");
      tom3.play();
      break;
  
    case"d":
      var tom4=new Audio("sounds/tom-4.MP3");
      tom4.play();
      break;
  
    case"j":
      var snare=new Audio("sounds/snare.MP3");
       snare.play();
      break;
 
    case"k":
      var kick=new Audio("sounds/kick-bass.MP3");
      kick.play();
      break;
 
     case"l":
      var crash=new Audio("sounds/crash.MP3");
      crash.play();
      break;
 
      
      default: console.log(event);

  }
}
  



  function buttonAnimation(currentKey) {

  var activeButton= document.querySelector("."+currentKey);

  activeButton.classList.add("pressed"); 

   setTimeout(function(){
     activeButton.classList.remove("pressed");
   }, 100);
}


