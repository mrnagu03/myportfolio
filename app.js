let title = document.querySelector(".name");
let img = document.querySelector(".photo");
let portfolio = document.querySelector(".port");
let menu = document.querySelector(".menu1");
let creat = document.querySelector(".crate");
let logo = document.querySelector(".logo");
let info = document.querySelector(".info");

let background = document.querySelector("#main");
img.addEventListener("mouseenter", () => {
    title.style.color = "rgb(19, 181, 84)";
    portfolio.style.color = "rgb(19, 181, 84)";
    title.style.transition = "0.5s";
    background.style.backgroundColor = "white";
    logo.style.backgroundImage = "url(logo2.jpg)";
    logo.style.transition = "0.5s";
    background.style.transition = "0.5s";

    creat.style.color = "black";
    menu.style.color = "black";


})

img.addEventListener("mouseleave", () => {
    title.style.color = "aliceblue";
    portfolio.style.color = "aliceblue";
    creat.style.color = "aliceblue";
    background.style.backgroundColor = "black";
    logo.style.backgroundImage = "url(logo1.jpg)";
    logo.style.transition = "0.5s";
    background.style.transition = "0.5s";

})
menu.addEventListener("click", () => {
    menu.classList.toggle("active");
})
let skils = document.querySelector(".page2");




gsap.to(".page3 .text2", {
    transform: "translateX(-180%)",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        marker: true,
        scrub: 2,
        pin: true

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



