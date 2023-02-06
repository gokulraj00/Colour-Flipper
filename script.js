const btn=document.getElementById("btn")
const colortext=document.getElementById("gone")
const wrap=document.getElementById("fu")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',changebg)
function changebg(){
    let hexcolour='#'
    for(let i=1;i<=6;i++){
       hexcolour+=randHexValue()
    }
    wrap.style.backgroundColor=hexcolour
    colortext.innerHTML=hexcolour
}

function randHexValue(){
    let randomIndex=Math.floor(Math.random()*16)
    return hex[randomIndex]
}