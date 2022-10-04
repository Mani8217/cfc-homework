function calculate() {
    var salario = parseFloat(prompt('Entrar Su Sueldo : '));
    var cuantoHijos = parseInt(prompt('Cuantos Hijos Tiene : '));
    var genero = prompt('Su Genero :');
    var newSalario = 0;

    if(salario <= 15000 ) {
        newSalario = salario + (salario * 1.5 / 100);

    }else  {
        newSalario =salario + (salario * 5 / 100)
    }
    for (let i=0 ; i < cuantoHijos;i++){
    newSalario += salario + (salario * 2 / 100 );
    }
    if(genero=='fem') {
        newSalario += salario + (salario * 0.1 / 100);
    }
    document.getElementById('result1').innerText = 'Amount Of Salary : ' + salario + '\n' + ' Cuantos Hijos : ' + cuantoHijos + ' \n '
    + ' Genero : ' + genero;

    document.getElementById('result2').innerText = 'Amount of new Salary : ' + newSalario;
 
}
