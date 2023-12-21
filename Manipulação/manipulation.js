// var nome = prompt('digite seu nome:')
// alert(`Seja bem vindo ${nome}`)

var pessoa = prompt('Como é seu nome?')
var resposta = prompt('Escolha uma opção:\n1. Pessoa humana\n2. Alienígena\n3. Pessoa jurídica\n4. Animal de estimação (respondendo pelo dono)');

var opcao = parseInt(resposta);

switch (opcao){
    case 1:
        alert(`${pessoa} Voce e uma pessoa humana.`);
        break;

    case 2:
        alert(`${pessoa} Voce e uma alienigena.`);
        break;

    case 3:
        alert(`${pessoa} Voce e uma pessoa juridica`);
        break;

    case 4:
        alert(`${pessoa}, você é um animal de estimação (respondendo pelo dono).`);
        break;

    default:
            alert(`${pessoa} Opcao invalida...`);
}
