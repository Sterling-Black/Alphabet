var images = ["Apple.jpg","Ball.jpg","Cat.jpg","Dog.jpg","Elephant.jpg","Fan.jpg","Gift.jpg","Horse.jpg","Ink.jpg","Juice.jpg","Kite.jpg","Lamp.jpg","Mouth.jpg","Nose.jpg","Octopus.jpg","Paint.jpg","Queen.jpg","Road.jpg","Saw.jpg","Towel.jpg","Utensil.jpg","Vampier.jpg","Watch.jpg","Xylophone.webp","Yogourt.jpg","Zoo.jpg"];

//adding event listener to the btns
$(".btn").on("mouseover",function(event){
    var val = event.target.innerHTML;
    var x = document.querySelector("."+val);
    var colour = getComputedStyle(x, null).getPropertyValue("background-color");
    doIt(val, colour);
});

$(".btn").on("click",function(event){
    var val = event.target.innerHTML;
    var x = document.querySelector("."+val);
    var colour = getComputedStyle(x, null).getPropertyValue("background-color");
    doIt(val, colour);
});

//adding event listener to the keys
$(document).keypress(function(event){
    var val = event.key.toUpperCase();
    var x = document.querySelector("."+val);
    var colour = getComputedStyle(x, null).getPropertyValue("background-color");
    doIt(val, colour);
})


function doIt(text, colour){
    var val = text;

    var val1, val2;

    for(var i=0;i<26;i++){
        val1 = images[i].slice("0","1");


        val2 = images[i].split(".");//to split the extension and the file name




        if(val1 == val){

            $("img").attr("src","images/"+images[i]);
            
            $(".title").text(val2[0]);
            $("body").css("background-color",colour);

            speak(val2[0]);

        }
    }
}

function speak(word){
    speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(msg);
}