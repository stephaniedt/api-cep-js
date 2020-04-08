let rua = document.getElementById('rua')
let complemento = document.getElementById('complemento')
let bairro = document.getElementById('bairro')
let uf = document.getElementById('uf')

async function searchCEP () {

    let inputCep = document.getElementById('getcep').value
    let pesquisaCep = await fetch(`http://viacep.com.br/ws/${inputCep}/json/`)

    let dadosDoCep =  await pesquisaCep.json()

    if(!dadosDoCep.erro) {
    rua.value = dadosDoCep.logradouro
    complemento.value = dadosDoCep.complemento
    bairro.value = dadosDoCep.bairro 
    uf.value = dadosDoCep.uf

    } else {
        let erroMsg = document.getElementById('respostaErro')
        erroMsg.innerHTML = `
        <div class="alert alert-danger" role="alert">
            O cep digitado é inválido.
        </div>

        `
        rua.value = " "
        complemento.value = " "
        bairro.value = " "
        uf.value = " "


    }
}