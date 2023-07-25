function clicou() {
    var media= document.getElementById('media')
    var br1= document.getElementById('barra1')
    var br2= document.getElementById('barra2')
    var b1= Number(b1.value)
    var b2= Number(b2.value)
    var media= tring(media.string)
    var valor= [600-(b1*2+b2*3)]/5
    document.getElementById('media').innerHTML=valor
    document.getElementById('nota-necessaria').innerHTML='nota necessaria'
}