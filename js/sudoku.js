import * as config from './config.js';
import * as funciones from './funciones.js';

console.log(config.primero)
const createGrid = (place) => {
    const placeIn = document.getElementById(place)
    const markup = `
    <div class="container"
    id="container" 
    style=  "
        float: left;
        width:60vh;
        height:60vh;
        display: inline-grid;
        border: 3px #110156 solid; 
        grid-template-columns: repeat(9,11.1111%);
        grid-template-rows:  repeat(9,11.1111%);
            "
    >
    </div>
    `
    placeIn.innerHTML = markup
    fillGrid('#FFF4DB'); //· Crea las casillas con el color definido ·//
    cargarProblema(config.primero); //· Carga un problema de ejemplo ·//
}

const fillGrid = (color) => {
    const container = document.getElementById('container')
    let gruesoT=1,gruesoR=1,colorL='#000000', numCasilla=1, area=1;
    for (let i=1; i<=9;i++){
        for (let j=1; j<=9;j++){
            if(i==4 || i==7){gruesoT=3;colorL='#110156';}
            if(j==3 || j==6){gruesoR=3;colorL='#110156';}
            let casilla = `
            <div 
            id="casilla${numCasilla}" 
            class="casillas" 
            fila=${i} 
            columna=${j} 
            area=${config.areas[numCasilla]}
            style="
            background-color: ${color};
                border: 1px black solid;
                border-top: ${gruesoT}px ${colorL} solid;
                border-right : ${gruesoR}px ${colorL} solid;
                text-align: center;
                font-size : 5vh;
                padding-top: 0.2vh;
                ">
            ${i}
            </div>`
            container.innerHTML += casilla
            gruesoT=1; gruesoR=1; colorL='#000000'; numCasilla++;
            };
        };
    }

const cargarProblema = (posicion) => {
    for (let i=1; i<=81;i++){
        const casillaSeleccionada = document.getElementById(`casilla${i}`)
        casillaSeleccionada.textContent = posicion[i];
        casillaSeleccionada.style.color = '#000000'
    }
}

const createHelp = () => {
    const markup = `
    <div id="myModal">
        <div id="modal-content">
            <span id="close">×</span>
            <div id="cosas">
            </div>
        </div>
    </div> 
    `
    document.body.innerHTML += markup

    let modal = document.getElementById("myModal");
modal.style=`
display: none; 
position: fixed; 
z-index: 1;
padding-top: 100px;
left: 0;
top: 0;
width: 100%;
height: 100%; 
overflow: auto; 
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
`;

let mContent=document.getElementById('modal-content');
let tablero=document.getElementById('container');
mContent.style=`
background-color: #fefefe;
position: fixed; 
padding: 100px;
border: 1px solid lightgray;
border-top: 10px solid #58abb7;
left: ${tablero.clientWidth}px;
top: 500px;
width:25%;
top: 0px;
`;

let close=document.getElementById('close');
close.style=`
color: #aaaaaa;
float: right;
font-size: 28px;
font-weight: bold;
`
close.addEventListener('mouseenter',function(){
    close.style.cursor ='pointer';
    close.style.color='black';
 })
 close.addEventListener('mouseleave',function(){
    close.style.cursor ='normal';
    close.style.color='#aaaaaa';
 })
 }

document.attachEvent = function( evt, q, fn ) {		//· Para crear los eventos de los elemento creados dinamicamente·//
	document.addEventListener( evt, ( e ) => {
        if (e.target.matches( q ) ) {
		 fn.apply( e.target, [e] );
        }
	});  
};

 document.attachEvent('click','.casillas', function() {
  /*
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("cosas");
    var span = document.getElementById("close");
    var body = document.getElementsByTagName("body")[0];
    
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";

        modalContent.textContent= `
    Casilla:    ${this.id.match(/(\d+)/g)}
    fila:       ${this.getAttribute('fila')}
    columna:    ${this.getAttribute('columna')}
    area:       ${this.getAttribute('area')}
    valor:      ${this.textContent} 
    `
    

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
    */
   const numero = prompt('Cual ponemos?','');
   this.style.color='red';
   this.textContent=numero;
});

document.attachEvent('contextmenu','.casillas', function() { //· click derecho sobre las casillas ·//
    funciones.marcaNumero(this.textContent);

});

document.oncontextmenu = function() { //· Desactivamos el menu de contexto para que no salga cuando usemos click derecho con el raton ·//
    return false;
}

createGrid('sudokuQ'); //· Crea el tablero de sudoku en el div con el nombre sudokuQ·//
createHelp(); //· Crea el div de trabajo·//



