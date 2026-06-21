// 1. Pega o formulário pelo seletor
const form = document.querySelector('form')

// 2. Escuta o evento de envio do formulário
form.addEventListener('submit', function (event) {
  event.preventDefault() // impede o envio até passar nas validações

  // 3. Pega os valores digitados
  const nome = document.getElementById('nome').value.trim()
  const email = document.getElementById('email').value.trim()
  const telefone = document.getElementById('telefone').value.trim()

  // 4. Expressões regulares (padrões) para validar formato
  const regexNome = /^[A-Za-zÀ-ÿ\s]{3,}$/        // só letras e espaço, mínimo 3 caracteres
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // formato algo@algo.com
  const regexTelefone = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/ // (11) 91234-5678

  // 5. Validação do nome
  if (!regexNome.test(nome)) {
    alert('Digite um nome válido, com pelo menos 3 letras (sem números).')
    return // para a execução, não envia o formulário
  }

  // 6. Validação do email
  if (!regexEmail.test(email)) {
    alert('Digite um email válido. Exemplo: nome@email.com')
    return
  }

  // 7. Validação do telefone
  if (!regexTelefone.test(telefone)) {
    alert('Digite um telefone válido. Exemplo: (11) 91234-5678')
    return
  }

  // 8. Se passou em todas as validações
  alert('Agendamento validado com sucesso!')
  form.submit() // envia o formulário de verdade
})