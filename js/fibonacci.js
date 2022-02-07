function fibonacci(number)
/* 
	calculate the fibonnaci sequence from 0 until the position 'number'
	Arguments: number (represets the position is the fibonacci sequence)
	return: Fibonacci sequence value in the given position
*/
{
	var fibonacci_sequence = [];
	fibonacci_sequence.push(0);
	fibonacci_sequence.push(1);
	fibonacci_sequence.push(1);

    var var1 = 0;

    var var2 = 1;

    var var3 = 1;

    for(var i=2; i <= number;i++)

    {
		var3 = var1 + var2;
		var1 = var2;
		var2 = var3;
		fibonacci_sequence.push(var3);   
    }
   return fibonacci_sequence.pop();
}

function lastFibonacci(){
/* 
	This procedure updates the current position value decresing it in 1 and calculate the new fibonacci value
	in the updated index. 
	Arguments: none

*/
	var control = document.getElementById('fib');
	var numero = parseInt(control.value)-1;
	if (isNaN(numero)){
		alert('No es un valor valido');
		$("#fib_seq").val(" ");
		return;
	}
	if (numero<0){
		alert('La serie fibonacci NO incluye numeros negativos');
		return;
	}
	if (numero==0){
		$("#fib").val(numero);
		$("#fib_seq").val("0");
		return;
	}
	if (numero==1 || numero == 2) {
		$("#fib").val(numero);
		$("#fib_seq").val("1");
		
	}
	else{
		$("#fib_seq").val(fibonacci(numero-1));
		$("#fib").val(numero);
	}
	
}

function nextFibonacci(){
/* 
	This procedure updates the current position value increasing it in 1 and calculate the new fibonacci value
	in the updated index. 
	Arguments: none

*/
	var control = document.getElementById('fib');
	var numero = parseInt(control.value);
	if (isNaN(numero)){
		alert('No es un valor valido');

		return;
	}
	if (numero<0){
		alert('La serie fibonacci NO incluye numeros negativos');
		return;
	}
	if (numero==0){
		$("#fib").val(numero+1);
		$("#fib_seq").val("1");
		return;
	}
	if (numero==1) {
		$("#fib").val(numero+1);
		$("#fib_seq").val("1");
		
	}
	else{
		$("#fib").val(numero+1);
		$("#fib_seq").val(fibonacci(numero+1));
		
	}
	
}

function validateFibonacci(){
	/* 
		This procedure takes the current position value and verify if it's valid
		if not, the field is restarted to 0, in other case Fibonacci is calculated
		for the updated index. 
		Arguments: none
	
	*/
		var control = document.getElementById('fib');
		var numero = parseInt(control.value);
		if (isNaN(numero)){
			alert('No es un valor valido');
	
			return;
		}
		if (numero<0){
			alert('La serie fibonacci NO incluye numeros negativos');
			return;
		}
		if (numero==1 || numero == 2) {
			$("#fib").val(numero);
			$("#fib_seq").val("1");
			
		}
		if (numero==0){
			$("#fib").val(numero);
			$("#fib_seq").val("0");
			return;
		}
		
		else{
			$("#fib").val(numero);
			$("#fib_seq").val(fibonacci(numero));
			
		}
		
	}

function restore() {
	document.getElementById("fib_seq").innerHTML = " ";
}

function currentFibonacci(){
/* 
	This procedure updates the current position value decresing it in 1 and calculate the new fibonacci value
	in the updated index. 
	Arguments: none

*/
	var control = document.getElementById('fib');
	var numero = parseInt(control.value);

	if (isNaN(numero) && !numero==""){
		alert('No es un valor valido');
		return;
	}
	if (numero<0){
		alert('La serie fibonacci NO incluye numeros negativos');
		return;
	}
	if (numero<2) {
		$("#fib_seq").val( parseInt($("#fib_seq").val())+1);
		
	}
	else{
		$("#fib_seq").val(fibonacci(numero));
	}
	
}
