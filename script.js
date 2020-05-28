const container = document.querySelector('#container');

function grid(num){
    for(let i=0; i<num;i++){

    let row = document.createElement('div');
    
    row.classList.add("row");

    for(let j=0; j<num;j++){

    cell = document.createElement('div');

    cell.classList.add("cell");

    row.appendChild(cell);
}
    document.getElementById("container").appendChild(row);
}
}
grid(16);


const cellElement = document.querySelectorAll('.cell');

function turnWhite() {

    this.style.backgroundColor = 'white';
    this.style.borderColor = 'white';   
         
}

function colorWhite() {
 
    cellElement.forEach((cell) => { cell.addEventListener('mouseover', turnWhite); });

}

colorWhite();



document.getElementById('reset').onclick = reset;


function reset (){
    
    cellElement.forEach(cell=>cell.style.backgroundColor = 'black') ;
    cellElement.forEach(cell=>cell.style.borderColor = 'grey');
}
   
