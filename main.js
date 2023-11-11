const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
document.getElementsByTagName('button')[0].disabled = true;

campoA.addEventListener('keyup', function (e) {
    validacaoDeCampos(
        Number.parseInt(e.target.value), Number.parseInt(campoB.value)
        );
})

campoB.addEventListener('keyup', function (e) {
    validacaoDeCampos(
        Number.parseInt(campoA.value), Number.parseInt(e.target.value)
        );
})

function validacaoDeCampos(valueA, valueB) {
    if (!Number.isNaN(valueA) && !Number.isNaN(valueB)) {
        if (valueA < valueB) {
            document.getElementsByTagName('p')[0].style.display = 'block'
            document.getElementsByTagName('p')[0].classList.add('mensagem-sucesso');
            document.getElementsByTagName('p')[0].innerText = 'Formulário válido';
            document.getElementsByTagName('button')[0].disabled = false;
            campoB.classList.remove("erro")
        } else {
            document.getElementsByTagName('p')[0].style.display = 'block'
            document.getElementsByTagName('p')[0].classList.remove('mensagem-sucesso');
            document.getElementsByTagName('p')[0].classList.add('mensagem-erro');
            document.getElementsByTagName('p')[0].innerText = `Formulário inválido\n
            O valor do campo B precisa ser maior do que o campo A`;
            document.getElementsByTagName('button')[0].disabled = true;
            campoB.classList.add("erro")
        }
    }
}

document.addEventListener('submit', function (e) {
    e.preventDefault();

    campoA.disabled = true;
    campoB.disabled = true;
    document.getElementsByTagName('p')[0].style.display = 'none';
    document.getElementsByTagName('p')[1].style.display = 'block';
    document.getElementsByTagName('p')[1].classList.add('mensagem-sucesso');
    document.getElementsByTagName('p')[1].innerText = 'Formulário enviado com sucesso!';
})