"use strict";

window.onload = function(){

    var board = document.getElementById("board")
    var box = board.querySelectorAll('div')


    let counter = 0;

    let game_state = ["", "", "", "", "", "", "", "", ""];

    box.forEach(function(item)
    {
        //Set each div's class to square
        item.setAttribute("class", "square");

        //sets inner html of each div to ""
        item.innerHTML="";


        //Add click event listener to each square where X & O can be placed.
        item.addEventListener("click", function(){
            
            //if counter is even it is player 1's turn and if the box is still empty ""
            
            if(counter % 2 == 0 && this.innerHTML == "" )
            {
                //Place an X inside item
                item.innerHTML = "X";

                //set class of item to square X so it looks properly
                item.setAttribute("class", "square X");

                //Increment counter so that it becomes the other players turn
                counter++;
            
                game_state[Array.from(box).indexOf(item)] = "X";

            }

            else if(counter % 2 != 0 && this.innerHTML == "")
            {
                //Place an O inside item
                item.innerHTML = "O";

                //set class of item to square O so the css formats it properly
                item.setAttribute("class", "square O");

                counter++;

                game_state[Array.from(box).indexOf(item)] = "O";
            }

        });

        
    });



}