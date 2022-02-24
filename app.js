var app = new Vue({
    el: '#app',
    data: {
        fullpageshow: false,
        currentindex: 0,
        productindex: 0,
        windowsize: 'big',
        isloading: true,
        transitionname:'right-in',
        
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
        productinfo: [{
            picurl:'./assests/DSC05734.jpg',
            name: '白蝦',
            price: '150',
            content: '每隻粉鑽蝦約 13±2 公分 <br> 一盒約 250±30 公克 <br> 每盒約 10-13 尾'
        }, {
            picurl:'./assests/DSC05721.jpg',
            name: '特大白蝦',
            price: '170',
            content: '每隻粉鑽蝦約 15±2 公分 <br> 一盒約 250±30 公克 <br> 每盒約 8-10 尾'
        }]
    },
    methods: {
        onImgLoad() {
            this.isloading = false
            console.log(this.isloading)
        },
        changeproduct(st) {
            if (st == 'add') {
                this.productindex++;
               
                if (this.productindex == this.productinfo.length) {
                    this.productindex = 0
                }
               
              



            } else if (st == 'minus') {
                this.productindex--
                if (this.productindex == -1) {
                    this.productindex = this.productinfo.length - 1
                }



            }
        },
        addindex(st) {
            if (st == 'add') {

                this.currentindex++;
                this.transitionname='left-in'
                if (this.currentindex == this.cscomment.length) {
                    this.currentindex = 0;
                }




            } else if (st == 'minus') {
                this.transitionname='right-in'
                this.currentindex--
                if (this.currentindex == -1) {
                    this.currentindex = this.cscomment.length - 1
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

        },
        onResize() {
            if (window.innerWidth > 960) {
                this.windowsize = 'big'
            } else if (window.innerWidth < 960 && window.innerWidth > 480) {
                this.windowsize = 'mid'
            } else {
                this.windowsize = 'small'
                
            }
        },
        
        scrolltotop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
        },
    },
    created() {
        window.addEventListener('resize', this.onResize)
        if (window.innerWidth > 960) {
            this.windowsize = 'big'
        } else if (window.innerWidth < 960 && window.innerWidth > 480) {
            this.windowsize = 'mid'
        } else {
            this.windowsize = 'small'
          
           

        }
        // console.log(this.isloading)
    },
    beforeDestroy() {
        window.addEventListener('resize', this.onResize)
    },
    mounted() {

        window.addEventListener("scroll", function () {
            var navbar = document.querySelector(".navbar")
            navbar.classList.toggle("sticky", window.scrollY > 0)
        })
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 700,
            speedAsDuration: true
        });
        
        setInterval(() => {
            this.addindex('add');
        }, 5000);


        var tl = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 450,
            loop: true
            // opacity:[0,1],

        });
        tl
            .add({
                targets: '.loadinpage .one',
                fill: ['#fff', '#e07d6a'],
            })
            .add({
                targets: '.loadinpage .two',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .three',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .four',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .five',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .six',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .seven',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .eight',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .nine',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })
            .add({
                targets: '.loadinpage .ten',
                fill: ['#fff', '#e07d6a'],
                // translateX: 250,
            })

        anime({
            targets: '.scrollhint .decoline',
            height: ['30px', '100px'],
            easing: 'easeInOutQuad',
            loop: true,
            direction: 'alternate',
            duration: 2000
        });

        anime({
            targets: '.cover-area .logowrap img',
            // height: ['30px', '100px'],
            rotateX:20,
            // rotateY:30,
            easing: 'easeInOutQuad',
            loop: true,
            direction: 'alternate',
            duration: 1500
        });
       
       
        
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