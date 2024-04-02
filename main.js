let player = document.querySelector('.player')
var score = document.querySelector('.score')
let btn = document.querySelector('.btn1')
var real = 0;




player.addEventListener('click',()=>{

     real++
     score.innerText = `score:${real}` 


    var posx = Math.floor(Math.random()*650)
    var posy = Math.floor(Math.random()*550)
    var randscale = Math.floor(Math.random()*250)

    if(randscale < 60){
        randscale =  90
    }

    player.style.marginTop = posy + 'px'
    player.style.marginLeft = posx + 'px'
    player.style.width= randscale + 'px'
    player.style.height= randscale + 'px'


    
})

btn.addEventListener('click',()=>{
    score.innerText = 'score:0'
})