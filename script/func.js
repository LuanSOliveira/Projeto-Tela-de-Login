function validaUsuario(usuario, data){
    let lista = [];
    let validador = 0;

    data.map(itens => lista.push(itens.nome));

    if (lista.includes(usuario)){
        const indice = lista.indexOf(usuario);

        if (data[indice].status == 'ativo'){
            validador = indice;
            return validador;
        }
        else{
            validador = 'O usuário está inativo.';
            return validador;
        }
    }
    else{
        validador = 'O usuário não existe.';
        return validador;
    }
}

function validaSenha(senha, usuario, data){
    const validadeUsuario = validaUsuario(usuario, data);

    if (typeof validadeUsuario == "number"){
        if(senha == data[validadeUsuario].senha){
            return true
        }
        else{return 'Senha incorreta'}
    }
    else{return validadeUsuario}
}

export function fazLogin(usuario, senha){
    fetch('https://62aa6726371180affbd4cdb9.mockapi.io/usuarios')
    .then(response => response.json())
    .then((data) => {

        const validadeUsuario = validaSenha(senha, usuario, data);

        if(typeof validadeUsuario != 'string'){
            window.location.href = "../src/main.html";
        }
        else{alert(validadeUsuario)}
    })

}