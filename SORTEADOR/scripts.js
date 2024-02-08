function generateNumber() {



    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("Numero Nao Permitido");
    } else {
        const result = Math.floor(Math.random() * (max - min) + min);

        alert(result)

    }

}