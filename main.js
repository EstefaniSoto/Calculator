function calcularResultado() {
    event.preventDefault(); // Detiene el comportamiento predeterminado del formulario

    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var operator = document.getElementById('operators').value;

    var resultado;
    if (operator === '+') {
        resultado = parseFloat(n1) + parseFloat(n2);
    } else if (operator === '-') {
        resultado = parseFloat(n1) - parseFloat(n2);
    } else if (operator === '*') {
        resultado = parseFloat(n1) * parseFloat(n2);
    } else if (operator === '/') {
        resultado = parseFloat(n1) / parseFloat(n2);
    }

    document.getElementById('result').value = resultado;
}