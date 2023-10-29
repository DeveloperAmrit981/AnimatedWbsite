var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x -10 +"px"
    crsr.style.top = dets.y  -10 +"px"
    crsrBlur.style.left = dets.x -200 +"px"
    crsrBlur.style.top = dets.y -200 +"px"
})



gsap.to("#nav", {
    backgroundColor: "#000",
    height: "5rem",
    duration:1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -20%",
        scrub: 1
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    duration:1,
    scrollTrigger: {
        trigger: "#main",
        scroller : "body",
        start: "top -40%",
        end: "top -100vh",
        scrub: 3
    }
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale = 4;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.transition = " all ease 0.5s";
        crsr.style.backgroundColor = "transparent";
        crsrBlur.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function() {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #ebf8c5";
        crsr.style.transition = " all ease 0.1s";
        crsr.style.backgroundColor = "";
        crsrBlur.style.backgroundColor = "";
    });
});

gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity:0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }

})

gsap.from("#cards-container .card", {
    scale: 0.8,
    opacity:0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }

})

gsap.from("#colon1",{
    y:-90,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        markers:false,
        start: "top 50%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 90,
    x: 70,  
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 45%",
        scrub: 4
    }
});

gsap.from("#page4 h1",  {
    y: 50,
    scrollTrigger:{
        trigger: "#page4",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 55%",
        scrub: 4
    }
})

gsap.from("#food",{
    scale: 0,
    opacity:0,
    x:600,scrollTrigger:{
        trigger:"#food",
        scroller:"body",
        start: "top 60%",
        end: "top 55%",
        scrub: 1
    }
})



