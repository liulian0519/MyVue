new Vue({
    el:'#app',
    data:{
        name:'liulian',
        job:'student',
        website:'https://github.com/liulian0519',
        websiteTag:'<a href="https://github.com/liulian0519">github</a>',
        age:30,
        X:0,
        Y:0
    },
    methods:{
        greet:function (time) {
            return 'Good ' + time + ' '+this.name+'！';
        },
        add:function (inc) {
            return  this.age += inc
        },
        redu:function (dec) {
            return this.age -= dec
        },
        mouseon:function (event) {
             // console.log(event)
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        // stopMoving:function (event) {
        //     event.stopPropagation();  //阻止事件冒泡
        // }
        logName:function () {
            console.log("你正在输入你的名字...")
        },
        logAge:function () {
            console.log("你正在输入你的年龄...")
        }
    }
});
/*
* el:元素
* data:用于数据的存储
* */