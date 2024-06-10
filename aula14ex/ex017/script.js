function gerar(){
    var n = document.getElementById('txtn')
    var r = document.getElementById('seltab')
    if (n.value.length == 0){
        alert ('[ERRO] Digite um número!')
    } else {
        var n1 = Number(n.value)
        var c = 1
        r.innerHTML = '' //para limpar a tabuada no pc do cliente
        while (c <= 10) {
            var item = document.createElement('option') //criei elemento do tipo option - para colocar opções na tabuada
            item.text = `${n1} x ${c} = ${n1*c}` //parte de dentro do option/tabuada
            r.appendChild(item) //para aparecer a tabela
            c++
        }
    }
}