// first cell
let cross = document.createElement('cross');
cross.className = "symbol";
cross.innerHTML = "<span id='x'> X </span> ";

let nought = document.createElement('nought');
nought.className = "symbol";
nought.innerHTML = "<span id='o'> O </span>"

const tbody = document.querySelector('#board tbody');
tbody.addEventListener('click', function (e) {
  const cell = e.target.closest('td');
  if (!cell) {return;} // Quit, not clicked on a cell
  const row = cell.parentElement;
  cell.append(cross);   
});