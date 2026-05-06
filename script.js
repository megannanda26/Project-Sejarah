gsap.registerPlugin(ScrollTrigger);

// Fungsi untuk slider pertama (Kerajaan)
const wrapper1 = document.querySelector("#slider1");
const panels1 = gsap.utils.toArray("#slider1 .container:not(.start-container):not(.end-container)");
const timeline1 = document.querySelectorAll(".tl1")

let getScrollAmount1 = () => {
    return -(wrapper1.scrollWidth - window.innerWidth);
};

let tween = gsap.to(wrapper1,{
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

gsap.to(timeline1, {
    x: () => (wrapper1.scrollWidth - window.innerWidth), 
    ease: "none",
    scrollTrigger: {
        trigger: "#slider1",
        start: "top top",
        end: () => "+=" + (wrapper1.scrollWidth - window.innerWidth),
        scrub: 1,
        invalidateOnRefresh: true,
    }
});


// Animasi zoom pada gambar slider 1
panels1.forEach((panel) => {
    let img = panel.querySelector(".img img");
    if(img) {
        gsap.to(img, {
            scale: 1.1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                containerAnimation: tween, 
                start: "left center",
                end: "right center",
                scrub: 1,
            }
        });
    }
});

// Fungsi untuk slider kedua (Kemerdekaan)
const wrapper2 = document.querySelector("#slider2");
const panels2 = gsap.utils.toArray("#slider2 .container:not(.start-container):not(.end-container)");
const timeline2 = document.querySelectorAll(".tl2")

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

gsap.to(timeline2,{
    x: () => (wrapper1.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: "#slider2",
        start: "top top",
        end: () => "+=" + (wrapper1.scrollWidth - window.innerWidth),
        scrub: 1,
        invalidateOnRefresh: true,
    }
})

// Animasi zoom pada gambar slider 2
panels2.forEach((panel) => {
    let img = panel.querySelector(".img img");
    if(img) {
        gsap.to(img, {
            scale: 1.1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                containerAnimation: tween2, 
                start: "left center",
                end: "right center",
                scrub: 1,
            }
        });
    }
});

window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});

// Animasi fade in untuk elemen saat scroll
gsap.utils.toArray(".container .text, .container .img").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1
    });
});