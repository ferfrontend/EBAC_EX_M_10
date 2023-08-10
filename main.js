$(document).ready(function () {
    $('#telefone-cadastro').mask('(00) 00000-0000');
    $('#cpf-cadastro').mask('000.000.000-00', {reverse: true});
    $('#cep-cadastro').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        submitHandler: function (){
            alert('Formulario Enviado com Sucesso!')

            $('#nome-cadastro').val('');
            $('#email-cadastro').val('');
            $('#telefone-cadastro').val('');
            $('#cpf-cadastro').val('');
            $('#endereco-completo-cadastro').val('');
            $('#cep-cadastro').val();
        }
    })
})