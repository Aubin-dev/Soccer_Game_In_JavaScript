let input = document.querySelector('input');
let act = document.getElementById('action') 

let actions = ["But!","corner!","Coup-franc!","Penalty!","Fautes!"];

function afficheAction(){
    actions.forEach(el =>{
        console.log(el)
    })
}
afficheAction()




document.addEventListener('keydown', (event)=>{
    let touche = event.key;
    console.log(touche);
}
)