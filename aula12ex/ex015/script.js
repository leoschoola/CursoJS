function verificar () {
    var data = new Date() //pegar data atual do pc
    var ano = data.getFullYear() //pegar ano c 4 digitos
    var fano = document.getElementById('txtano') //pegar a barra do ano do nascimento inserido pelo cliente
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value) //ano que o usuario colocou menos ano do pc
       var genero = ''
       var img = document.createElement('img') //criada tag para inserir a imagem
       img.setAttribute('id', 'foto') //para colocar imagem - igual na <div img id = 'foto'>
       if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança  
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescentehomem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhor.png')
            }
       } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança  
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescentemulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img) //adicionando imagem
    }
}