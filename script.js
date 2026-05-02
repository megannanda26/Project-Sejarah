gsap.registerPlugin(ScrollTrigger)

const wrapper1 = document.querySelector("#slider1");
const panels1 = gsap.utils.toArray("#slider1 .container");

let getScrollAmount1 = () => {
    return -(wrapper1.scrollWidth - window.innerWidth);
};

let tween = gsap.to(wrapper1, {
    x: getScrollAmount1, 
    duration: 3,
    ease: "none",    
    scrollTrigger: {
        trigger: "#slider1", 
        start: "top top",             
        end: () => "+=" + (wrapper1.scrollWidth - window.innerWidth), 
        scrub: 1,                      
        pin: true,                      
        invalidateOnRefresh: true,       
    }
});

panels1.forEach((panel) => {
    let img = panel.querySelector("#slider1 .container img");
    gsap.to(img, {
        scale: 1.2,
        duration: 1,
        ease: "none",
        scrollTrigger: {
            trigger: panel,
            containerAnimation: tween, 
            start: "left center",
            end: "right center",
            scrub: 0.5,
        }
    });
});


const wrapper2 = document.querySelector("#slider2");
const panels2 = gsap.utils.toArray("#slider2 .container");

let getScrollAmount2 = () => {
    return -(wrapper2.scrollWidth - window.innerWidth);
};

let tween2 = gsap.to(wrapper2, {
    x: getScrollAmount2, 
    duration: 3,
    ease: "none",    
    scrollTrigger: {
        trigger: "#slider2", 
        start: "top top",             
        end: () => "+=" + (wrapper2.scrollWidth - window.innerWidth), 
        scrub: 1,                      
        pin: true,                      
        invalidateOnRefresh: true,       
    }
});

panels2.forEach((panel) => {
    let img = panel.querySelector("#slider2 .container img");
    gsap.to(img, {
        scale: 1.2,
        duration: 1,
        ease: "none",
        scrollTrigger: {
            trigger: panel,
            containerAnimation: tween2, 
            start: "left center",
            end: "right center",
            scrub: 0.5,
        }
    });
});


window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});