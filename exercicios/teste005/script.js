function verificar(){
    var n1 = document.getElementById('txtn')
    var n2 = document.getElementById('txtn2')
    var p2 = document.getElementsById('res')
    if (n1 == n2){  
        p2.innerHTML = `${n1} e ${n2} são iguais!`
    } else {
        p2.innerHTML = `${n1} e ${n2} são diferentes!`
    }
    //p2.innerHTML = `${n1} e ${n2} são diferentes`
}
