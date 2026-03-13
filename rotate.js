let box = document.getElementById('box')
let btn = document.getElementById('btn')
let sbtn = document.getElementById('stop-btn')


btn.addEventListener('click',()=>{

    if(!box.classList.contains('anime')){
        box.classList.add('anime')
        box.style.animationPlayState='running'
    }else{
        box.classList.remove('anime')
    }

})

sbtn.addEventListener('click',()=>{
    if(box.style.animationPlayState=="paused"){
        box.style.animationPlayState="running"
    }else{
        box.style.animationPlayState="paused"
    }
    
})