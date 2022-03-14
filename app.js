
// Create cross element
function get_cross(){
    let cross = document.createElement('cross');
    cross.className = "symbol";
    cross.innerHTML = "<div id='x'> X </div> ";
    return cross;
}

// Create nought element
function get_nought(){
    let nought = document.createElement('nought');
    nought.className = "symbol";
    nought.innerHTML = "<span id='o'> O </div>";
    return nought;
}

function turn_change(count){
    if(count % 2 == 0){
        return get_cross();
    }
    return get_nought();
}

function check_win(counter, board){
    

    let cross = 1
    let nought = 0
    
    //fill board
    if (document.querySelectorAll("#board td")[counter].getElementsByTagName("nought").length == 1 ){
        board[get_row(counter)][get_column(counter)] = nought;
    }
    else{
        board[get_row(counter)][get_column(counter)] = cross;
    } 

    //row cross
    if(board[0][0] == cross && board[0][1] == cross && board[0][2] == cross){
        message("cross");
    }
    if(board[1][0] == cross && board[1][1] == cross && board[1][2] == cross){
        message("cross");
    }
    if(board[2][0] == cross && board[2][1] == cross && board[2][2] == cross){
        message("cross");
    }

    //row nought
    if(board[0][0] == nought && board[0][1] == nought && board[0][2] == nought){
        message("nought");
    }
    if(board[1][0] == nought && board[1][1] == nought && board[1][2] == nought){
        message("nought");
    }
    if(board[2][0] == nought&& board[2][1] == nought && board[2][2] == nought){
        message("nought");
    }

    //column cross
    if(board[0][0] == cross && board[1][0] == cross && board[2][0] == cross){
        message("cross");
    }
    if(board[0][1] == cross && board[1][1] == cross && board[2][1] == cross){
        message("cross");
    }
    if(board[0][2] == cross && board[1][2] == cross && board[2][2] == cross){
        message("cross");
    }
    
    //column nought
    if(board[0][0] == nought && board[1][0] == nought && board[2][0] == nought){
        message("nought");
    }
    if(board[0][1] == nought && board[1][1] == nought && board[2][1] == nought){
        message("nought");
    }
    if(board[0][2] == nought && board[1][2] == nought && board[2][2] == nought){
        message("nought");
    }

    //diagonal
    if(board[0][0] == cross && board[1][1] == cross && board[2][2] == cross){
        message("cross");
    }

    if(board[0][2] == cross && board[1][1] == cross && board[2][0] == cross){
        message("cross");
    }

    if(board[0][0] == nought && board[1][1] == nought && board[2][2] == nought){
        message("nought");
    }

    if(board[0][2] == nought && board[1][1] == nought && board[2][0] == nought){
        message("nought");
    }
    
}

function get_row(counter){

    //if counter is between 0-2: first row
    //if counter is between 3-5: second row
    //if counter is between 6-8: third row

    if(counter >=0 && counter <= 2){
        return 0;
    }
    else if (counter >= 3 && counter <= 5){
        return 1;
    }
    return 2;
}

function get_column(counter){
    // if counter is between 0-2: do nothing
    // if counter is between 3-5: 
    if(counter == 0 || counter == 3 || counter == 6){
        return 0;
    }
    if(counter == 1 || counter == 4 || counter == 7){
        return 1;
    }
    return 2;
}

function play_game(){
    let board = [ [ , , ],
                    [ , , ],
                    [ , , ] 
                    ];

    let count = 0;
    let cell = document.querySelectorAll("#board td");
    for(let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", function(){
            if(!cell[i].hasChildNodes()){
                // TODO: replace with choice of sign 
                cell[i].append(turn_change(count));
                count++;
                
                //check to see if there is a win
                check_win(i, board);
                
                if(count == cell.length) message("tie");
            }
        });   
    }
}

function message(symbol){

    if(symbol === "cross"){

        Swal.fire({
            icon: 'success',
            text: 'Cross wins!'
        
        });
        
    }
    else if(symbol === "nought"){
        Swal.fire({
            icon: 'success',
            text: 'Nought wins!'
        
        });
    }

    else{
        Swal.fire({
            icon: 'info',
            text: 'Tie!'
        });
    }

    //reload page once user clicks ok
    document.getElementsByClassName("swal2-confirm swal2-styled")[0].addEventListener("click", function(){
        location.reload();
    });
}

play_game();