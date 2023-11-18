$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        // Pega o valor do input e adiciona na nova tag "li" 
        // que será adicionada no corpo HTML.
        $(`<li>${$('input').val()}</li>`).appendTo('ul');

        // Limpando campo depois de cadastrar tarefa
        $('input').val('');

        // Adicionando estilo texto riscado
        $('li').click(function () {
            $(this).addClass('texto-riscado');
        })
    })
})