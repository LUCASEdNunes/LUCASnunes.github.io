let item = 0;
const max=79;

function proxImagem(img){
    fetch('img/${img}.jpg')
    .then(resp => resp.blob())
    .then(blob => {
        const imgObjectURL = URL.createObjectURL(blob);
        console.log(imgObjectURL);
        const proxImg = document.createElement("img");
        proxImgTag.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxImgTag);
    })
}

window.onload = function(){
    for (let item=0; item<5; item++){
         proxImagem(item);
 }
}

window.onscroll = function(){
    let altura= document.body.scrollHeight;
    let scrollPoint= window.scrollY + window.innerHeight;
     if(scrollPoint >= altura){
        proxImagem(item++);
     }
}