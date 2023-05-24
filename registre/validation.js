function val_reg(){ 
    var type_name = document.getElementById('nome').value
    var type_email = document.getElementById('email').value
    var type_pass = document.getElementById('password').value
    var type_adress = document.getElementById('adress').value
    var type_tel = document.getElementById('tel').value
    var type_cpf = document.getElementById('cpf').value
    var type_birth = document.getElementById('birth').value

    /*Validação para checar se há algum espaço vázio ou, com espaços entre os inputs*/

    if (type_name == '' ){
        window.alert('ERRO! Verifique novamente o campo (NOME).')

    } else if (type_email == '' || type_email.search(' ') >= 0){
        window.alert('ERRO! Verifique novamente o campo (E-MAIL).')

    } else if (type_pass == '' || type_pass.search(' ') >= 0){
        window.alert('ERRO! Verifique novamente o campo (SENHA).')

    } else if (type_adress == ''){
        window.alert('ERRO! Verifique novamente o campo (ENDEREÇO).')

    } else if (type_tel == ''|| type_tel.search(' ') >= 0){
        window.alert('ERRO! Verifique novamente o campo (TELEFONE).')

    } else if (type_cpf == '' || type_cpf.search(' ') >= 0){
        window.alert('ERRO! Verifique novamente o campo (CPF).')

    } else if (type_birth == ''){
        window.alert('ERRO! Verifique novamente o campo (DATA DE NASCIMENTO).')
    } else {
        window.alert('Seu cadastro foi feito com SUCESSO!\nPor favor, aguarde a confirmação que enviaremos por E-mail...')
        window.location.href = '/APS1/login/login.html'
    }

}