// PROMESA 1: Simular petición a BD
function promesa1() {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            let persona = {
                nombre: "Maria",
                apellido: "Rojas",
                edad: 25,
                lugar: "Bathroom Kingdom"
            };
            resolve(persona);
        }, 2000);
    });

    promesa.then(resultado => {
        console.log("Promesa 1 resuelta");
        document.getElementById("resultado1").innerHTML = 
            "Nombre: " + resultado.nombre + 
            "<br>Apellido: " + resultado.apellido + 
            "<br>Edad: " + resultado.edad + 
            "<br>Lugar: " + resultado.lugar;
    }).catch(error => {
        console.log(error);
    });
}

// PROMESA 2: Verificar segundos actuales
function promesa2() {
    let promesa = new Promise((resolve, reject) => {
        let fecha = new Date();
        let segundos = fecha.getSeconds();
        
        if (segundos > 30) {
            if (segundos % 2 === 0) {
                resolve(fecha.toLocaleTimeString());
            } else {
                reject("Error: Los segundos son impares");
            }
        } else {
            if (segundos % 2 !== 0) {
                resolve(fecha.toLocaleTimeString());
            } else {
                reject("Error: Los segundos son pares");
            }
        }
    });

    promesa.then(resultado => {
        console.log("Promesa 2 resuelta");
        document.getElementById("resultado2").innerHTML = 
            "Hora actual: " + resultado;
    }).catch(error => {
        console.log(error);
        document.getElementById("resultado2").innerHTML = error;
    });
}

// PROMESA 3: Proceso pesado
function promesa3() {
    let promesa = new Promise((resolve, reject) => {
        let resultado = 0;
        for (let i = 0; i < 1e8; i++) {
            resultado = resultado + i;
        }
        resolve(resultado);
    });

    promesa.then(resultado => {
        console.log("Promesa 3 resuelta");
        document.getElementById("resultado3").innerHTML = 
            "Proceso completado. El delay ocurre porque el navegador tarda en procesar el bucle grande.";
    }).catch(error => {
        console.log(error);
    });
}
