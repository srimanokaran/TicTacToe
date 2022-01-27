//gameboard state is an array 
const Gameboard = () => {
    board = [  ["","X",""],
               ["","O",""], 
               ["","X",""] ];

    return {board};
}

const Player = (symbol) => {
    return {symbol};
}

//How to assign a player (2 player)
//X and O is assigned when player views page
// 

board = Gameboard();
player_one = Player("X");
player_two = Player("O");