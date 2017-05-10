// some jquery code 
$(document).ready(function(){
    startTween();
});

function startTween(){
    var d= 1

         TweenLite.to($("#toolBox"), 1.5, {delay: d, x: 610, y: 300, scale: 1.5,
              onComplete: returnToNormal, onCompleteParams: [$("#toolBox")]});        

         TweenLite.to(".color", 1.5, {delay:(d + .5), x: 700, y: 330,
              color: "#ff0000", fontSize: "+=55", onComplete: returnTextToNormal });
}

function returnToNormal(obj) {
    if(obj){
         TweenLite.to(obj, 1.5, {x: 100, y: 150  , scale: 1.2 });       
    }
            
}

function returnTextToNormal() {
         TweenLite.to(".color", 1.5, {x: 600, y: 0, color: "black", fontSize: "+80" });
}   
