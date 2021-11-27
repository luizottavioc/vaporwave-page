document.body.addEventListener('keyup', function(e) {
    if(e.keyCode == 13){
        openVpw();
    } 
});

function openVpw () {
    document.querySelector('#initialPage').style.top = "-100%";
    document.querySelector('#initialPage').style.opacity = "0.3";
    document.querySelector('#justBorder').style.opacity = "1";
}

var street = document.querySelector('#street');
street.addEventListener('wheel', walk);

function walk (e) {
    e.preventDefault();
    if(e.deltaY >= 0) {
        document.querySelector('#streetTable').style.animation = "walkUp 1s linear infinite";
        document.querySelector('#streetTable').style.top = "unset";
        document.querySelector('#streetTable').style.bottom = "0";
    }else if(e.deltaY < 0) {
        document.querySelector('#streetTable').style.animation = "walkDown 1s linear infinite";
        document.querySelector('#streetTable').style.bottom = "unset";
        document.querySelector('#streetTable').style.top = "0";
    }
}