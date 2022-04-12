console.log(primero)
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
    cargarProblema(primero); //· Carga un problema de ejemplo ·//
}
const createHelp = () => {
    const markup = `
    <div class="help"
    id="help"
    style=  "
        float: left;
        width: 30%;
        min-height: 30%;
        border: 1px black solid;
        margin-left: 20px;
            "
    >
Help
    </div>
    `
    document.body.innerHTML += markup
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
            fila=${i} 
            columna=${j} 
            area=${areas[numCasilla]}
            style="
                background-color: ${color};
                border: 1px black solid;
                border-top: ${gruesoT}px ${colorL} solid;
                border-right : ${gruesoR}px ${colorL} solid;
                text-align: center;
                font-size : 5vh;
                padding-top: 0.2vh;
                color: grey;
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
    }
}
createGrid('sudokuQ'); //· Crea el tablero de sudoku en el div con el nombre sudokuQ·//
createHelp(); //· Crea el div de trabajo·//

