// some jquery code 
$(document).ready(function(){
    startTween();
});

function startTween(){
        TweenLite.to($("#toolBox"), 3, {x: 600, y: 300, rotation: 360, alpha: .2});        

        TweenLite.to(".color", 3, {color: "#ff0000", fontSize: "150"});
}

