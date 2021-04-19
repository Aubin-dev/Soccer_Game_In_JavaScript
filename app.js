let input = document.querySelector('input');
let act = document.getElementById('action');
let balle = document.querySelector('.balle');
let body= document.querySelector('body');
let actions = ["But!","corner!","Coup-franc!","Penalty!","Fautes!"];
let occasionReal ,occasionBarca;
let equipe =[];
let timeOfGame =document.querySelector('input');
let minute =0;
let seconde =0;
let score=[0,0];


const goal1 ={
    y:(screen.height/2)+'px',
    x: 'O'+'px'
};

const goal2 ={
    x:screen.width+'px',
    y: (screen.height/2)+'px'
};


// let time = parseInt(localStorage.getItem('time')) || 90


equipe.push('Real', 'Barça');

console.log("le match est en cours");

function ballMove(){
    balle.style.top=Math.floor(Math.random()*1000)+'px';
    balle.style.left=Math.floor(Math.random()* 2700)+'px';
}

setInterval(ballMove,1000)


// let timer = setInterval(()=>{

//     time--
//     localStorage.setItem('time' , time)
    
//     if(time === 0 ){
    
//         clearInterval(timer)
//         localStorage.removeItem('time')
//         balle.style.top='50%';
//         balle.style.left='50%';
//         balle.style.transform="translate(-50%,-50%)";
//         alert('Le Match est TERMINÉ !!!')
//     }

//     },1000);


function onclick_page(event){
    let x=event.clientX;
    let y=event.clientY;
    console.log("position "+ x + " , "+ y)
}









