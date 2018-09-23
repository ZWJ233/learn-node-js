window.onload = function(){
    var h1 = document.getElementsByTagName('h1');
    var button = document.getElementsByTagName('button');
    var isColor = true;
    console.log(h1);
    console.log(button);
    button[0].onclick = function(){
        if(isColor){
            console.log(isColor);
            h1[0].classList.remove('red');
            h1[0].classList.add('pink');
            isColor = false;
        }else{
            console.log(isColor);
            h1[0].classList.remove('pink');
            h1[0].classList.add('red');
            isColor = true;
        }
    }
}