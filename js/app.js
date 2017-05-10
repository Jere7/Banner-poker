// some jquery code 
$(document).ready(function(){
    startTween();
});

function startTween(){
         TweenLite.to($("#toolBox"), 1.5, {x: 610, y: 300, scale: 1.5, onComplete: returnToNormal });        

         TweenLite.to(".color", 1.5, { x: 100, y: 330, color: "#ff0000", fontSize: "+=55", onComplete: returnTextToNormal });
}

function returnToNormal() {
         TweenLite.to($("#toolBox"), 1.5, {x: 0, y: 0  , scale: 1.2 });       
}

function returnTextToNormal() {
         TweenLite.to(".color", 1.5, {x: 100, y: 330, color: "#fff", fontSize: "-=55" });
}   
