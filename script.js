

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '') // remove tudo que não for número

    // CPF precisa ter 11 dígitos e não pode ser uma sequência repetida (111.111.111-11, etc)
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false
}
function validaCampos() {

    // pega os valores digitados pelo usuário
    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const telefone = document.getElementById('telefone').value.trim()

    // -------- NOME: maior que 2 e menor ou igual a 100 caracteres --------
    if (nome.length <= 2 || nome.length > 100) {
        alert('Nome inválido! Deve ter entre 3 e 100 caracteres.')
        return false
    }

    if (email.length <= 10 || email.length > 100) {
        alert('E-mail inválido! Deve ter entre 11 e 100 caracteres.')
        return false
    }

    // -------- TELEFONE: exatamente 11 caracteres --------
    if (telefone.length !== 11) {
        alert('Telefone inválido! Digite o DDD + número, somente dígitos (11 números).')
        return false
    }

    // se passou em todas as validações, o formulário é enviado normalmente
    return true
}
