// new Vue({
//     el:'#app',
//     data:{
//         name:'liulian',
//         job:'student',
//         website:'https://github.com/liulian0519',
//         websiteTag:'<a href="https://github.com/liulian0519">github</a>',
//         age:30,
//         X:0,
//         Y:0
//     },
//     methods:{
//         greet:function (time) {
//             return 'Good ' + time + ' '+this.name+'！';
//         },
//         add:function (inc) {
//             return  this.age += inc
//         },
//         redu:function (dec) {
//             return this.age -= dec
//         },
//         mouseon:function (event) {
//              // console.log(event)
//             this.X = event.offsetX;
//             this.Y = event.offsetY;
//         },
//         // stopMoving:function (event) {
//         //     event.stopPropagation();  //阻止事件冒泡
//         // }
//         logName:function () {
//             // console.log("你正在输入你的名字...")
//            // this.name = this.$refs.name.value;
//         },
//         logAge:function () {
//             //console.log("你正在输入你的年龄...")
//         }
//     }
// });
/*
* el:元素
* data:用于数据的存储
* */
//从下边开始是计算属性的位置
// new Vue({
//     el:'#app',
//     data:{
//         a:0,
//         b:0,
//         age:20,
//         changecolor:false,
//         changelength:false
//     },
//     methods:{
//         // addToA:function () {
//         //     return this.age+this.a
//         // },
//         // addToB:function () {
//         //     return this.age+this.b
//         // }
//     },
//     computed:{
//         addToA:function () {
//             return this.age+this.a
//         },
//         addToB:function () {
//             return this.age+this.b
//         },
//         comparClass:function () {
//             return {
//                 changecolor:this.changecolor,
//                 changelength:this.changelength
//             }
//         }
//     }
// })
//从下边开始一个小demo
new Vue({
    el:'#app',
    data:{
        health:100,
        ended:false
    },
    methods:{
        punch:function () {
            this.health -= 10
            if(this.health<=0){
                this.ended = true
            }
        },
        restart:function () {
            this.health = 100
            this.ended=false;
        }
    }
})