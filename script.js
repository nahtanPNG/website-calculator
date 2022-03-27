//Função que adiciona os números no visor quando pressionam o botão
function calcNum(num){
	if(typeof gvisor == 'undefined'){
		document.calcform.visor.value ='';
	}
	document.calcform.visor.value = document.calcform.visor.value + num;
		gvisor = 1;
}

//função para limpar o visor
function calcLimpar(){
	document.calcform.visor.value = '';
	delete gvalor;
	delete goper;
	delete gvisor;
}

//função do algoritmo de "passagem" das ações do usuário
function calcParse(oper){
	var valor = document.calcform.visor.value;
	delete gvisor;

	if(typeof goper != 'undefined' && oper == 'resultado'){
		gvalor = calcOper(goper, gvalor, valor);
		document.calcform.visor.value = gvalor;
		delete oper;
		delete gvalor;
		return(0);
	}
	if(typeof gvalor != 'undefined'){
		gvalor = calcOper(goper, gvalor, valor);
		goper = oper;
		document.calcform.visor.value = gvalor;
	}
	else{
		gvalor = valor;
		goper = oper;
	}
}

//função que executa as operações da calculadora
function calcOper(oper, valor1, valor2){
	if(oper == "somar"){
		var valor = parseFloat(valor1) + parseFloat(valor2);
	}else if(oper == "subtrair"){
		var valor = parseFloat(valor1) - parseFloat(valor2);
	}else if(oper == "multiplicar"){
		var valor = parseFloat(valor1) * parseFloat(valor2);
	}else if(oper == "dividir"){
		var valor = parseFloat(valor1) / parseFloat(valor2);
	}else if(oper == "raiz"){
		var valor = Math.sqrt(parseFloat(valor1));
	}else if(oper == "exp"){
		var valor = Math.pow(parseFloat(valor1), parseFloat(valor2));
	}else if(oper == "por"){
		var valor = parseFloat(valor1) * parseFloat(valor2) / 100 ;
	}
		return(valor);
}


