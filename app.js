var app = new Vue({
    el: '#app',
    data: {
        fullpageshow: false,
        currentindex: 0,
        productindex:0,
        cscomment: [{
                name: '花蓮市 陳媽媽',
                content: '每隻蝦都很大，而且急速冷凍，完好無斷頭斷尾，完全無腥味！'
            },
            {
                name: '台北市 黃先生',
                content: '蝦子Q彈好吃，水煮、清炒都可以。'
            }, {
                name: '臺北市 張先生',
                content: '送來的蝦子肉質很飽滿，吃起來完全不會有粉粉的感覺。'
            }
        ],
        productinfo:[{
            name:'白蝦',
            price:'170',
            content:'每隻粉鑽蝦約 13±2 公分 <br> 一盒約 250±30 公克 <br> 每盒約 10-13 尾'
        },{
            name:'特大白蝦',
            price:'200',
            content:'每隻粉鑽蝦約 16±2 公分 <br> 一盒約 250±30 公克 <br> 每盒約 8-10 尾'
        }]
    },
    methods: {
        changeproduct(st){
            if (st == 'add') {
                this.productindex++;
                if (this.productindex == this.productinfo.length) {
                    this.productindex = this.productinfo.length - 1;
                }




            } else if (st == 'minus') {
                this.productindex--
                if (this.productindex == -1) {
                    this.productindex = 0
                }



            }
        },
        addindex(st) {
            if (st == 'add') {
                this.currentindex++;
                if (this.currentindex == this.cscomment.length) {
                    this.currentindex = this.cscomment.length - 1;
                }




            } else if (st == 'minus') {
                this.currentindex--
                if (this.currentindex == -1) {
                    this.currentindex = 0
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
                    translateY: 0,
                    translateX: 0,
                    duration: 1000
                });
                anime({
                    targets: '.hammenu .line:nth-child(2) ',
                    backgroundColor: '#e07d6a',
                    rotate: 0,
                    translateY: 0,
                    translateX: 0,
                    duration: 1000
                });
            } else {
                this.fullpageshow = true
                anime({
                    targets: '.hammenu .line:nth-child(1) ',
                    backgroundColor: '#fff',
                    rotate: 30,
                    translateY: 2,
                    translateX: 13,
                    duration: 1000
                });
                anime({
                    targets: '.hammenu .line:nth-child(2) ',
                    backgroundColor: '#fff',
                    rotate: -30,
                    translateX: 13,
                    translateY: -10,
                    duration: 1000
                });
            }

        }
    },
    mounted() {
        window.addEventListener("scroll", function () {
            var navbar = document.querySelector(".navbar")
            navbar.classList.toggle("sticky", window.scrollY > 0)
          })
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