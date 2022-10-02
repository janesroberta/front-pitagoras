const form = document.getElementById("meu_formulario");

function funcaoHipotenusa() {
    const catetoA = document.getElementById("catetoA").value;
    const catetoB = document.getElementById("catetoB").value;
    const hipotenusa = document.getElementById("hipotenusa").value;

    axios.post(
        'http://localhost:3000/',
        {
            "hipotenusa": hipotenusa,
            "catetoA": catetoA,
            "catetoB": catetoB
        }
    ).then((res) => {
        console.log(res);

        if (res.data.hipotenusa != undefined) {
            alert(`o valor da hipotenusa e ${res.data.hipotenusa}`)
        } else if (res.data.catetoA != undefined) {
            alert(`o valor do catetoA e ${res.data.catetoA}`)
        } else if (res.data.catetoB != undefined) {
            alert(`o valor do catetoB e ${res.data.catetoB}`)
        }
    }).catch((err) => {
        console.log(err.response.data.message);
        createAlert(err.response.data.message);
    })

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