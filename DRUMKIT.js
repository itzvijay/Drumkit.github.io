/*document.querySelectorAll(".drum")[0].addEventListener("click",drum1);
document.querySelectorAll(".drum")[1].addEventListener("click",drum1);
document.querySelectorAll(".drum")[2].addEventListener("click",drum1);
document.querySelectorAll(".drum")[3].addEventListener("click",drum1);
document.querySelectorAll(".drum")[4].addEventListener("click",drum1);
document.querySelectorAll(".drum")[5].addEventListener("click",drum1);
document.querySelectorAll(".drum")[6].addEventListener("click",drum1);*/

//this section only for click
// creting a audio website with javascript like piano
/*
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
           var buttonClicked=this.innerHTML;
           switch (buttonClicked){
                case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                case "a":
                var tom1=new Audio("sounds/tom-2.mp3");
                tom1.play();
                break;
                case "s":
                var tom1=new Audio("sounds/tom-3.mp3");
                tom1.play();
                break;
                case "d":
                var tom1=new Audio("sounds/tom-4.mp3");
                tom1.play();
                break;
                case "j":
                var tom1=new Audio("sounds/crash.mp3");
                tom1.play();
                break;
                case "k":
                var tom1=new Audio("sounds/kick-bass.mp3");
                tom1.play();
                break;
                case "l":
                var tom1=new Audio("sounds/snare.mp3");
                tom1.play();
                break;
                default:
                    console.log(buttonClicked);
                break;
           }
        });
    }
*/
// creting a audio website with javascript like piano
//this place for both "click"and "keyPRess"
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonClicked=this.innerHTML;
       addSound(buttonClicked);
       buttonAnimation(buttonClicked);
       
    });
}

// add eventlistener keypress
document.addEventListener("keypress",function(event){
    addSound(event.key);
    buttonAnimation(event.key);
});

function addSound(key){
    switch (key){
        case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
        var tom1=new Audio("sounds/tom-2.mp3");
        tom1.play();
        break;
        case "s":
        var tom1=new Audio("sounds/tom-3.mp3");
        tom1.play();
        break;
        case "d":
        var tom1=new Audio("sounds/tom-4.mp3");
        tom1.play();
        break;
        case "j":
        var tom1=new Audio("sounds/crash.mp3");
        tom1.play();
        break;
        case "k":
        var tom1=new Audio("sounds/kick-bass.mp3");
        tom1.play();
        break;
        case "l":
        var tom1=new Audio("sounds/snare.mp3");
        tom1.play();
        break;
        default:
            console.log(buttonClicked);
        break;
   }
}

// adding animation to the pressed or click value
function buttonAnimation(animation){
    var selector=document.querySelector("."+animation);
    selector.classList.add("pressed"); 
setTimeout(function(){
    selector.classList.remove("pressed");
},100);

}

