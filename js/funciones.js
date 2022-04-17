export const buscaNumero = (numero) => {
	const fila=[];
	const columna=[];
	const area=[];

	for (let i=1; i<=9;i++){
		fila[i] = document.querySelectorAll(`div[fila='${i}']`);
		columna[i] = document.querySelectorAll(`div[columna='${i}']`);
		area[i] = document.querySelectorAll(`div[area='${i}']`);
	}
	limpia()
	for (let i=1; i<=81;i++){

		
		const casillaSeleccionada = document.getElementById(`casilla${i}`)
		if(casillaSeleccionada.textContent){casillaSeleccionada.style.backgroundColor = '#FFE5B6'}; // Marcamos casilla rellena
		if (casillaSeleccionada.textContent == numero){

			area[casillaSeleccionada.getAttribute('area')].forEach(element => {element.style.backgroundColor = '#FFE5B6'}); // Marcamos el area
			fila[casillaSeleccionada.getAttribute('fila')].forEach(element => {element.style.backgroundColor = '#FFE5B6'}); // Marcamos la fila
			columna[casillaSeleccionada.getAttribute('columna')].forEach(element => {element.style.backgroundColor = '#FFE5B6'}); // Marcamos la columna

			casillaSeleccionada.style.backgroundColor = '#FABF5A' // Marcamos la casilla

		}
	}

}

export const limpia = () =>{
	for (let i=1; i<=81;i++){
		const casillaSeleccionada = document.getElementById(`casilla${i}`)
			casillaSeleccionada.style.backgroundColor = '#FFF4DB'
		}
		
}

