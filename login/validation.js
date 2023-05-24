function val_reg(){ 
    var type_email = document.getElementById('email').value
    var type_pass = document.getElementById('password').value
    
    if (type_email == '' || type_email.search(' ') >= 0){
        window.alert('ERRO! Verifique novamente o campo (E-MAIL).')

    } else if (type_pass == ''|| type_pass.search(' ') >= 0){
        window.alert('ERRO! Verifique novamente o campo (SENHA).')
    } else{
        window.alert('É um prezer ter você por dentro da nossas novidades! 😁')
    }
}