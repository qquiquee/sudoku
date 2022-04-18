export const marcaNumero = (numero) => {
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

buscaNumero(numero)
}

export const buscaNumero =(numero)=>{
	const casillasCandidatas = document.querySelectorAll(`div[style*="background-color: rgb(255, 244, 219)"]`);
	const fila=[];
	const columna=[];
	const area=[];
	
	for (let i=1; i<=9;i++){
		fila[i] = document.querySelectorAll(`div[fila='${i}']`);
		columna[i] = document.querySelectorAll(`div[columna='${i}']`);
		area[i] = document.querySelectorAll(`div[area='${i}']`);
	}

	console.log(document.querySelectorAll(`div[area='1'][style*="background-color: rgb(255, 244, 219)"]`).length)
	casillasCandidatas.forEach(candidata => {

		if(document.querySelectorAll(`div[area='${candidata.getAttribute('area')}'][style*="background-color: rgb(255, 244, 219)"]`).length == 1){
			console.log(candidata)
			candidata.style.color='red';
			candidata.textContent=numero;
		}
		if(document.querySelectorAll(`div[fila='${candidata.getAttribute('fila')}'][style*="background-color: rgb(255, 244, 219)"]`).length == 1){
			console.log(candidata)
			candidata.style.color='red';
			candidata.textContent=numero;
		}
		if(document.querySelectorAll(`div[columna='${candidata.getAttribute('columna')}'][style*="background-color: rgb(255, 244, 219)"]`).length == 1){
			console.log(candidata)
			candidata.style.color='red';
			candidata.textContent=numero;
		}


	});

}

export const limpia = () =>{
	for (let i=1; i<=81;i++){
		const casillaSeleccionada = document.getElementById(`casilla${i}`)
			casillaSeleccionada.style.backgroundColor = '#FFF4DB'
		}
		
}

