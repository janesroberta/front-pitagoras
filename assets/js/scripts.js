const form = document.getElementById("meu_formulario");

//primeiro passo: calcular cateto ao quadrado
//segundo passo: calcular hipotenusa ao quadrado
//terceiro passo: calcular hipotenusa - cateto
//fazer a rtaiz quadrada do resultado anterior

function funcaoHipotenusa() {
    const catetoA = document.getElementById("catetoA").value;
    const catetoB = document.getElementById("catetoB").value;
    const hipotenusa = document.getElementById("hipotenusa").value;

    if (!catetoA && !hipotenusa) {
        createAlert("Insira mais um valor!");
        return;
    } else if (!catetoA && !catetoB) {
        createAlert("Insira mais um valor!");
        return;
    } else if (!catetoB && !hipotenusa) {
        createAlert("Insira mais um valor!");
        return;
    }

    if (catetoA && catetoB) {
        document.getElementById("hipotenusa").value = Math.hypot(catetoA,catetoB).toFixed(2);
        return;
    }
    
    if (catetoA && hipotenusa) { 
        const quadradoCateto = catetoA * catetoA;
        const quadradoHipotenusa = hipotenusa * hipotenusa;
        const auxiliar = quadradoHipotenusa - quadradoCateto;
        const resultado = Math.sqrt(auxiliar);

        document.getElementById("catetoB").value = resultado;
    }


    if (catetoB && hipotenusa) {
        const quadradoCateto = catetoB * catetoB;
        const quadradoHipotenusa = hipotenusa * hipotenusa;
        const auxiliar = quadradoHipotenusa - quadradoCateto;
        const resultado = Math.sqrt(auxiliar);

        document.getElementById("catetoA").value = resultado;
    } 
}

function createAlert(message) {
    document.querySelector("body").insertAdjacentHTML("beforebegin", `<div class='alert'>${message}</div>`);

    setTimeout(function () {
        deleteAlert();
    }, 3000);
}

function deleteAlert() {
    const list = document.querySelectorAll(".alert");
    for (const item of list) {
        item.remove();
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    funcaoHipotenusa();
});