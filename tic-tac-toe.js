"use strict";

window.onload = function(){

    var board = document.getElementById("board")
    var box = board.querySelectorAll('div')

    box.forEach(function(item)
    {
        item.setAttribute("class", "square");

        item.innerHTML="";
    });
}