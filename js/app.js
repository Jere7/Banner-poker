// some jquery code 
$(document).ready(function(){
    startTween();
});

function startTween(){
        TweenLite.to($("#toolBox"), 3, {x: 350, y: 300, rotate: 360, alpha:.2, scale: 1.5});        

        TweenLite.to(".color", 1, {color: "#ff0000"});
}

