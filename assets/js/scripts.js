let numero = 0

function mostrar() {
    const numero_Contador = document.getElementById("contador")
    numero_Contador.innerText = numero
}


function increment() {
	numero++
    mostrar()
}

function decrement() {
	numero--
    mostrar()
}

mostrar()