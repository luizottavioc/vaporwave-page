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

document.querySelector('#changecolor').addEventListener('change', function(){
    if(document.querySelector('#changecolor').checked){
        $('body').css('background-position', 'top');
        $('.sun').css('filter', 'drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.7))');
        $('.sun table tr').css('background-color', 'rgba(255,255,255,0.8)');
        $('.street table tr td').css('background-image','radial-gradient(rgb(35, 38, 114), rgb(65, 11, 128))');
        $('.just-border').css('border','15px solid rgb(240,240,240)');
        $('.just-border').css('box-shadow','0px 0px 15px rgb(240,240,240)');
        $('.aloc-all-page img').css('filter','brightness(100%)');
        $('.coq1').css('animation','brilhoW infinite 2s');
        $('.coq2').css('animation','brilhoW infinite 2s');
    }else{
        $('body').css('background-position', 'bottom');
        $('.sun').css('filter', 'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.7))');
        $('.sun table tr').css('background-color', 'rgba(0,0,0,0.8)'); 
        $('.street table tr td').css('background-image','radial-gradient(rgb(166, 43, 177), rgb(127, 49, 138)');
        $('.just-border').css('border','15px solid rgb(12,12,12)');
        $('.just-border').css('box-shadow','0px 0px 15px rgb(12,12,12)');
        $('.aloc-all-page img').css('filter','brightness(0%)');
        $('.coq1').css('animation','brilhoB infinite 2s');
        $('.coq2').css('animation','brilhoB infinite 2s');

    }
});