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

function sign_turns(count){
    if(count % 2 == 0){
        return get_cross();
    }
    return get_nought();
}

let count = 0;
let cell = document.querySelectorAll("#board td");
for(let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", function(){

        if(!cell[i].hasChildNodes()){
            // replace with choice of sign later
            cell[i].append(sign_turns(count));
            count++;
        
            // if (document.querySelectorAll("#board td")[i].getElementsByTagName("nought").length == 1 ){
            //     console.log("Yes");
            // }
            // console.log(cell[i].getAttribute("id"));
            
        }
    });
}

