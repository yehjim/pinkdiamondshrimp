var app = new Vue({
    el: '#app',
    data: {
        fullpageshow: false
    },
    methods: {
        openfullpagemenu() {
            if (this.fullpageshow == true) {
                this.fullpageshow = false
                anime({
                    targets: '.hammenu .line:nth-child(1) ',
                    backgroundColor: '#e07d6a',
                    rotate: 0,
                    translateY:0,
                    translateX:0,
                    duration: 1000
                });
                anime({
                    targets: '.hammenu .line:nth-child(2) ',
                    backgroundColor: '#e07d6a',
                    rotate: 0,
                    translateY:0,
                    translateX:0,
                    duration: 1000
                });
            } else {
                this.fullpageshow = true
                anime({
                    targets: '.fullpagemenu',
                    opacity: [0, 1],
                    duration: 2000
                });
                anime({
                    targets: '.hammenu .line:nth-child(1) ',
                    backgroundColor: '#fff',
                    rotate: 30,
                    translateY:2,
                    translateX:13,
                    duration: 1000
                });
                anime({
                    targets: '.hammenu .line:nth-child(2) ',
                    backgroundColor: '#fff',
                    rotate: -30,
                    translateX:13,
                    translateY:-10,
                    duration: 1000
                });
            }

        }
    },
})

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to(".pic > img", {
        // x:1000,
        opacity: 0,

        duration: 1.5,
        scale: 0.9
    })
    .to(".logo", {
        opacity: 1,
        duration: 1.5,
        // scale:1
    })


ScrollTrigger.create({
    animation: tl,
    trigger: ".cover-area",
    start: "top top",
    end: "+=1500",
    duration: 1000,
    scrub: 0.5,
    pin: true,
});