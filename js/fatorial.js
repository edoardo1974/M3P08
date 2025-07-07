var numerointroduzido= 0; // Variable to store the number input by the user
var fatorial = 1; // Variable to store the factorial result



function pecaNumero() {// Function to get the number input from the user
    const input = document.getElementById('inputNumero');
    let numero = Number(input.value);
    input.value = '';
    return numero;
}

function adicionarNumero() {// Function to add the number input
    numerointroduzido = pecaNumero();
    if (numerointroduzido < 0 || numerointroduzido > 10) {// Check if the number is between 0 and 10
    alert("Por favor, escolha um número entre 0 e 10.");
    return false;
    }
    return numerointroduzido;
    }
    

function calcolarFatorial() {// Function to calculate the factorial of the number
    let numeroescolhido = adicionarNumero();
    for (let i = 1; i <= numeroescolhido; i++) {
        fatorial *= i;
    }
    if (numeroescolhido == false) {
        document.getElementById('resultado').innerHTML = `O fatorial  não pode ser calculado.`;
    }
    else {
        document.getElementById('resultado').innerHTML = `O fatorial de ${numeroescolhido} é ${fatorial}`;  
    }
}

