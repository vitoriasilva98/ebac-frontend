$(document).ready(function () {
    $('#carousel-images').slick({
        autoplay: true,
    });

    // Remover botões de voltar e avançar do carrossel
    $('.slick-next').css('display', 'none')
    $('.slick-prev').css('display', 'none')

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(11) 90000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoDeInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu email.',
            veiculoDeInteresse: 'Por favor, insira o carro de interesse.',
            mensagem: 'Por favor, insira uma mensagem.',
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    // Essa função é ativada quando um botão da classe 
    // ".lista-veiculos" é clicada
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        // Essa linha captura o text da tag h3
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        // Isso gera uma animação de âncora, fazendo a 
        // página descer até o ponto mencionado
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    })

});