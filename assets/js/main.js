function handleClickColor(color){
    var active = document.querySelector('.color-item.active');
    active.classList.remove('active');
    var newActive = document.querySelector('.color-item.'+color);
    newActive.classList.add('active');
    var shoe = document.querySelector('.shoe img');
    if(color == 'green'){
        shoe.src = "assets/images/tenis1.png";
    }else
    if(color == 'red'){
        shoe.src = "assets/images/tenis2.png";
    }   
    else{
        shoe.src = "assets/images/tenis3.png";
    }   
}
function handleClickSize(size){
    var active = document.querySelector('.size-item.active');
    active.classList.remove('active');
    var newActive = document.getElementById(size);
    newActive.classList.add('active');
}