// some jquery code 
$(document).ready(function(){
    startTween();
});

function startTween(){
        TweenLite.to($("#toolBox"), 3, {x: 100, y: 200, rotate: 90});        

        TweenLite.to(".color", 1, {color: "#ff0000"});
}

