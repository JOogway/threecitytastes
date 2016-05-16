

$(function() {
    var div = $('.mainframephotos');
    var height = (div.width() * 0.75)/3;
    div.css('height', height+"px");
});

$(window).resize(function() {
  var div = $('.mainframephotos');
    var height = (div.width() * 0.75)/3;
    div.css('height', height+"px");
});

var imgsop = [];
var imggda =[];
var imggdy =[];

var i = 0;

imgsop[0] =  '/assets/sop1.jpg';
imgsop[1] =  '/assets/sop2.jpg';
imgsop[2] =  '/assets/sop3.jpg';
imgsop[3] =  '/assets/sop4.jpg';
imgsop[4] =  '/assets/sop5.jpg';
imgsop[5] =  '/assets/sop6.jpg';


imggda[0] =  '/assets/gda1.jpg';
imggda[1] =  '/assets/gda2.jpg';
imggda[2] =  '/assets/gda3.jpg';
imggda[3] =  '/assets/gda4.jpg';
imggda[4] =  '/assets/gda5.jpg';
imggda[5] =  '/assets/gda6.jpg';


imggdy[0] =  '/assets/gdy1.jpg';
imggdy[1] =  '/assets/gdy2.jpg';
imggdy[2] =  '/assets/gdy3.jpg';
imggdy[3] =  '/assets/gdy4.jpg';
imggdy[4] =  '/assets/gdy5.jpg';
imggdy[5] =  '/assets/gdy6.jpg';

var counts = imggdy.length;
var iterationCount = 0;
setInterval(swapImages(-1), 4000);
//$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
function swapImages(i){
    iterationCount++;
     $('#gdyp').fadeTo(1500, 0.1, function(){$("#gdyp").css('background-image', 'url('+imggdy[i]+')');}).fadeTo(2000, 1).delay(4000);
     iterationCount++;
     if (iterationCount % 2 == 0) {
     $('#gdap').fadeTo(1500, 0.1, function()
{
    $("#gdap").css('background-image', 'url('+imggda[i]+')');
}).fadeTo(2000, 1).delay(4000);
}
 if (iterationCount % 3 == 0) {
     
     $('#sopp').fadeTo(1500, 0.1, function()
{
    $("#sopp").css('background-image', 'url('+imgsop[i]+')');
}).fadeTo(2000, 1).delay(4000);
}
    if( i < counts ){
        i++;
        
    }
        if(i==counts){
   
    i=0;
        setTimeout( swapImages(i), 1000 );
    }
        setTimeout( swapImages(i), 1000 );
    }





/*
i++;
setInterval(swapImages(i), 4000);

}*/
/*.fadeIn(1000).delay(2000).fadeOut*/