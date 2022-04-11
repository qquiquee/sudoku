
const createGrid = () => {
    const markup = `
    <div class="container"
    id="container" 
    style=  "
    float: left;
    display: inline-grid;
    border: 3px #110156 solid; 
    grid-template-columns: repeat(9,100px);
    grid-template-rows:  repeat(9,100px);
            "
    >
    </div>
    `
    document.body.innerHTML = markup
}
const createHelp = () => {
    const markup = `
    <div class="help"
    id="help"
    style=  "
    float: left;
    width: 500px;
    min-height: 500px;
    border: 1px black solid;
    margin-left: 20px;
    ;
            "
    >
Help
    </div>
    `
    document.body.innerHTML += markup
}

const fillGrid = (color) => {
    const container = document.getElementById('container')
    let gruesoT=1,gruesoR=1,colorL='#000000'
        for (let i=1; i<=9;i++){
            for (let j=1; j<=9;j++){
                if(i==4 || i==7){gruesoT=3;colorL='#110156';}
                if(j==3 || j==6){gruesoR=3;colorL='#110156';}
            let casilla = `
            <div 
            id="casilla${i}${j}" 
            style="
            background-color: ${color};
            border: 1px black solid;
            border-top: ${gruesoT}px ${colorL} solid;
            border-right : ${gruesoR}px ${colorL} solid;
            text-align: center;
            font-size : 60px;
            padding-top: 15px;
            color: grey;
            ">
            ${i}
            </div>`
            container.innerHTML += casilla
            gruesoT=1,gruesoR=1;colorL='#000000'
            };
        };
}
createGrid();
createHelp();
// layoutGrid(10, 10);
fillGrid('#FFF4DB');
