/*

Operadores Lógicos
&& = e

&& -> E -> Pessoa Exigente
    true && true = true
    true && false = false
    false && false = false

|| -> Ou -> Tanto faz
    true || true = true
    true || false = true
    false || false = false

!   -> Negacao
    !true = false
    !false = true

Operadores Type of e Delete

typeof -> Qual Tipo de dado
delete - > delete

*/

const contaSenha = false
const contaToken = false
const contaConta = false

if  (!(contaSenha || contaToken || contaConta)) {
    console.log("Logado com sucesso")
}else{
    console.log("Login falhou")
}