function calc(n1, n2, operator){
    return eval (`${n1} ${operator} ${n2}`)

}

let funcao = calc(4, 5, "-")
console.log(funcao)



//Função anonima abaixo...

(function(n1,n2) {
    return n1 + n2
}) (4,3 )      // como é uma função anonima eu ja chamo ela no final



// Arow Function

let calc = (n1, n2) => {
    return n1 + n2
}

let resultado = calc(5,3)
console.log(resultado)
