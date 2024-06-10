function contar(){
    var inicio = document.getElementById('txtin') //para pegar o numero do inicio
    var fim = document.getElementById('txtfi')
    var passo = document.getElementById('txtpa')
    var res = document.getElementById('res')
    if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length ==0){
        alert('[ERRO} Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value) //pegando o número do 'inicio'
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {
            for(var c=i; c <= f; c += p){ //contagem crescente
            res.innerHTML += ` ${c} \u{25B6}`  
        }
        } else {
            for (var c = i; c>= f; c -= p) { //contagem decrescente
                res.innerHTML += ` ${c} \u{25B6}`
            }
             res.innerHTML += `\u{1F3C1}`
        }
        
    }

}