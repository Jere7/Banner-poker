// some jquery code 
$(document).ready(function(){
    startTween();
});

function startTween(){
        TweenLite.to($("#toolBox"), 3, {x: 610, y: 300, scale: 1.5, onComplete: returnToNormal });        

        TweenLite.to(".color", 3, {color: "#ff0000", fontSize: "+=55"});
}

function returnToNormal() {
        TweenLite.to($("#toolBox"), 3, {x: 20, y: 35, scale: 1.2});       
}