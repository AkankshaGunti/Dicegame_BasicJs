var num = Math.random();
num = num*6;
num = Math.floor(num)+1;
var newimg= "images/dice" + num + ".png";
document.querySelector(".img1").setAttribute("src",newimg);

var num2 = Math.random();
num2= num2*6;
num2 = Math.floor(num2)+1;
var newimg2= "images/dice" + num2 + ".png";
document.querySelector(".img2").setAttribute("src",newimg2);
var res;
if(num === num2)
{
     res= "Draw";
}
else{
if(num>num2)
{
    res ='Player 1 wins';
}
else{
    res="player 2 wins";
}

}

document.querySelector("h1").innerHTML=res;