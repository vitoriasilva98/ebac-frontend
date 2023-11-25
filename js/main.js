$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'ex: (11) 90000-0000'
    })

    $('#cpf').mask('000.000.000-00',{
        placeholder: 'ex: 123.456.789.-10'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'ex: 09000-111'
    })

    $('button').on("click", function(e) {
        e.preventDefault();

        let nome = $('#nome');
        let email = $('#email');
        let telefone = $('#telefone');
        let cpf = $('#cpf');
        let endereco = $('#endereco');
        let cep = $('#cep');
        
        let cadastroCompleto = `*** Cadastro - Dados Pessoais ***
        \nNome: ${nome.val()} \nEmail: ${email.val()} \n${telefone.val()} \nCPF: ${cpf.val()} \nEndereço: ${endereco.val()} \nCEP: ${cep.val()} `;

        alert(cadastroCompleto);

        nome.val('');
        email.val('');
        telefone.val('');
        cpf.val('');
        endereco.val('');
        cep.val('');
    })
})