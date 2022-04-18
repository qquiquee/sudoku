export const resuelve = () => {
	let intentos=0;
	while (cuantosFaltan() > 0){		
		for (let i=1; i<=9;i++){
			marcaNumero(i) 
			}
			intentos++;
			if(intentos > 300){
				console.log('300 intentos y nada');
				buscarCandidatos()
				return;
			}
	}
	limpia()
}

export const buscarCandidatos = () => {		
	limpia();
	const vacias = document.querySelectorAll(`div:empty`);
	vacias.forEach(element => {
		
		// element.setAttribute('candidatos','disabled');	
		
		
		let resultado=[1,2,3,4,5,6,7,8,9];		
		const area = document.querySelectorAll(`div[area='${element.getAttribute('area')}']`);
		area.forEach(element => {
			let index = resultado.indexOf(parseInt(element.textContent));		
			if (index > -1) {
			   resultado.splice(index, 1);
			}			
		}); 
		const fila = document.querySelectorAll(`div[fila='${element.getAttribute('fila')}']`);
		fila.forEach(element => {
			let index = resultado.indexOf(parseInt(element.textContent));		
			if (index > -1) {
			   resultado.splice(index, 1);
			}			
		}); 
		const columna = document.querySelectorAll(`div[columna='${element.getAttribute('columna')}']`);
		columna.forEach(element => {
			let index = resultado.indexOf(parseInt(element.textContent));		
			if (index > -1) {
			   resultado.splice(index, 1);
			}			
		}); 
		
		element.title=resultado;

	}); 
}

export const cuantosFaltan = () => {
	return document.querySelectorAll(`div:empty`).length
}
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

	casillasCandidatas.forEach(candidata => {

		if(document.querySelectorAll(`div[area='${candidata.getAttribute('area')}'][style*="background-color: rgb(255, 244, 219)"]`).length == 1){
			// console.log(candidata)
			candidata.style.color='red';
			candidata.textContent=numero;
		}
		if(document.querySelectorAll(`div[fila='${candidata.getAttribute('fila')}'][style*="background-color: rgb(255, 244, 219)"]`).length == 1){
			// console.log(candidata)
			candidata.style.color='red';
			candidata.textContent=numero;
		}
		if(document.querySelectorAll(`div[columna='${candidata.getAttribute('columna')}'][style*="background-color: rgb(255, 244, 219)"]`).length == 1){
			// console.log(candidata)
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

export const reset = () =>{
	for (let i=1; i<=81;i++){
		const casillaSeleccionada = document.getElementById(`casilla${i}`)
			casillaSeleccionada.textContent='';
		}
		
}

export const jsonConsola = () =>{
	let elJson={};
	
	for (let i=1; i<=81;i++){
    	let dato=document.getElementById(`casilla${i}`).textContent;
		if(dato){ elJson[i]=parseInt(dato) }
	}
		
	return elJson 
}
