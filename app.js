let title = document.querySelector(".name");
let img = document.querySelector(".photo");
let portfolio = document.querySelector(".port");
let menu1 = document.querySelector(".menu1 i");
let menu = document.querySelector(".menu i");
let creat = document.querySelector(".crate");
let logo = document.querySelector(".logo");
let info = document.querySelector(".info");
let mesg = document.querySelector(".bottom");
let nava = document.querySelectorAll(".nav .menu a");

let background = document.querySelector("#main");
img.addEventListener("mouseenter", () => {
    title.style.color = "rgb(19, 181, 84)";
    portfolio.style.color = "rgb(19, 181, 84)";
    title.style.transition = "0.5s";
    background.style.backgroundColor = "white";
    logo.style.backgroundImage = "url(logo2.jpg)";
    logo.style.transition = "0.5s";
    background.style.transition = "0.5s";
    mesg.style.display = "none";
    creat.style.color = "black";
    menu.style.color = "black";
    nava.style.color = "black";


})

img.addEventListener("mouseleave", () => {
    title.style.color = "aliceblue";
    portfolio.style.color = "aliceblue";
    creat.style.color = "aliceblue";
    background.style.backgroundColor = "black";
    logo.style.backgroundImage = "url(logo1.jpg)";
    logo.style.transition = "0.5s";
    mesg.style.display = "inline";
    background.style.transition = "0.5s";
    menu.style.color = "#ffff";
    nava.style.color = "#ffff";

})

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");


let tl = gsap.timeline()
tl.from(".menu1", {
    x: 300,
    duration: 0.6

})
tl.from(".menu1 a", {
    x: 150,
    duration: 0.3,
    opacity: 0,
    stagger: 0.2
})
tl.pause();

menu.addEventListener("click", () => {
    tl.play();

})



menu1.addEventListener("click", () => {
    tl.reverse();
})


gsap.to(".page3 .text2", {
    transform: "translateX(-180%)",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 0%",
        end: "top -20%",
        pin: true,
        scrub: 2,


    }
})


gsap.from(".box1", {
    dealy: 0.4,

    duration: 1,

    y: -360,
    scrollTrigger: {
        trigger: ".box1",
        scroller: "body",
        start: "top 50%",

        scrub: 1
    }
})
gsap.from(".name", {
    x: -300,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.4
})

gsap.from(".port", {
    x: 300,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.4
})
gsap.from(".box2", {
    dealy: 0.4,

    duration: 1,
    x: -60,
    scrollTrigger: {
        trigger: ".box2",
        scroller: "body",
        start: "bottom 150%",
        scrub: 1


    }
})
gsap.from(".box3", {
    dealy: 0.4,

    duration: 1,
    y: -360,
    scrollTrigger: {
        trigger: ".box3",
        scroller: "body",
        start: "top 50%",
        scrub: 1



    }
})
gsap.from(".box4", {
    dealy: 0.4,

    duration: 1,
    x: 60,
    scrollTrigger: {
        trigger: ".box4",
        scroller: "body",
        start: "bottom 150%",
        scrub: 1


    }
})




$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
    $("#line-progress").css("width", "3%");
    $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
    $("#line-progress").css("width", "25%");
    $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
    $("#line-progress").css("width", "50%");
    $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
    $("#line-progress").css("width", "75%");
    $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
    $("#line-progress").css("width", "100%");
    $(".analysis").addClass("active").siblings().removeClass("active");
});



