
var app = new Vue({
    el:'#app',
    data:{
        fullpageshow:false
    },
    methods: {
        closefullpagemenu(){
            console.log('123')
            this.fullpageshow = false
        },
        openfullpagemenu(){
            this.fullpageshow = true
        }
    },
})

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to(".pic > img", {
    // x:1000,
    opacity: 0,
    duration: 1.5,
    // scale:0.5
})
.to(".logo",{
    opacity:1,
    duration:1.5,
    // scale:1
})

ScrollTrigger.create({
    animation: tl,
    trigger: ".cover-area",
    start: "top top",
    end: "+=3000",
    duration:1000,
    scrub: 0.5,
    pin: true,
});