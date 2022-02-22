var app = new Vue({
    el: '#app',
    data: {
        fullpageshow: false,
        currentindex:0,
        cscomment:[
            {
                name:'新北市 葉先生',
                content:'粉鑽蝦的蝦子在熱水煮出來後呈現的粉色相較跟一般的草蝦比起來比較淡，但在口味上卻是更加的濃郁'
            },
            {
                name:'台北市 黃先生',
                content:'蝦子Q彈好吃，水煮、清炒都可以'
            }
        ]
    },
    methods: {
        addindex(st){
            if(st=='add'){
                if(this.currentindex=this.cscomment.length){
                    this.currentindex==this.cscomment.length-1
                }else{
                    this.currentindex++;
                }
                
                
               
            }else if(st=='minus'){
                if(this.currentindex<0){
                    this.currentindex=0
                }else{
                    this.currentindex--
                }
              
               
            }
            console.log(this.currentindex)
           
        },
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
    mounted() {
        // anime({
        //     targets: '.logowrap img',
        //     rotate:15,
        //     direction: 'alternate',
        //     loop:true,
        //     duration: 100,
        //     // delay:300
        // });
    },
})

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to(".pic > img", {
        // x:1000,
        opacity: 0,

        duration: 1.5,
        scale: 0.8
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