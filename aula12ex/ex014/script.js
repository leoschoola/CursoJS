function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = '#bba036'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#c04903'
    } else {
        // BOA NOITE! 
        img.src = 'noite.png' //para pegar imagem que está no html
        document.body.style.background = '#173363' //para colocar cor no fundo qnd estiver noite
    }
}
