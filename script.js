let btn;
btn = document.querySelector(".btn")

let sqr;
sqr = document.querySelector(".red_square");

btn.addEventListener("click", function(){sqr.classList.add("green_square")});

let btn2;
btn2 = document.querySelector(".btn2")

let sqr2;
sqr2 = document.querySelector(".pink_square");

btn2.addEventListener("click", function(){sqr2.classList.add("blue_square")});
console.log(btn2)

let btn3;
btn3 = document.querySelector(".btn3")

let sqr3;
sqr3 = document.querySelector(".new_square");

btn3.addEventListener("click", function(){sqr3.classList.add("zoom_size_square")});
console.log(btn3)

let btn4;
btn4 = document.querySelector(".btn4")

let text4;
text4 = document.querySelector(".root1");

btn4.addEventListener("click", function(){text4.classList.remove("invisible")});
console.log(btn4)

let btn5;
btn5 = document.querySelector(".btn5")

let text5;
text5 = document.querySelector(".root2");

let text6;
text6 = document.querySelector(".root3");

btn5.addEventListener("click", function(){
    text5.classList.remove("invisible");
    text6.classList.remove("invisible");
}
);