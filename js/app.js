// some jquery code 
$(document).ready(function(){
    startTween();
});

function startTween(){
        TweenLite.to($("#toolBox"), 1, {x: 100, y: 200});
}

