const bola = document.getElementById("bola")
const clique = document.getElementById("clique")

var numberCliq = 0


bola.addEventListener('click',()=>{
    numberCliq++

    clique.innerHTML = `${numberCliq} cliques`
})