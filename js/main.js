var indexValue = 0;
window.addEventListener("wheel", ()=>{
    const img = document.querySelectorAll("img");
    for(x = 0; x < img.length; x++) {
        img[x].style.display ="none";
    }
    indexValue++; 
    if(indexValue > img.length){
        indexValue = 1 
    } else {
        img[indexValue - 1].style.display = "block";
    }
});

AOS.init();



    



