<template>
    <div class="pos">
      <el-row>
        <el-col :span="7" class="pos-order" id="order-list">
          <el-tabs type="card">
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width: 100%;">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" ></el-table-column>
                <el-table-column prop="price" label="金额" ></el-table-column>
                <el-table-column  label="操作" fixed="right">
                  <template scope="scope">
                    <el-Button type="text" size="small" @click="delSignalGoods(scope.row)">删除</el-Button>
                    <el-Button type="text" size="small" @click="addOrderList(scope.row)">增加</el-Button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="ad">
                <small>数量：</small> {{totalCount}}      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <small>金额：</small>{{totalMoney}}
              </div>
              <div class="btn">
                <el-button type="success" @click="checkOut()">结账</el-button>
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delAllGoods">删除</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              这是挂单页面
            </el-tab-pane>
            <el-tab-pane label="外卖">
              这是外卖页面
            </el-tab-pane>
            <el-tab-pane label="统计">
              这是统计页面
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17">
          <div class="hotGoods">
            <div class="title">热销食品</div>
            <div class="hot-list">
              <ul>
                <li v-for="items in hotGoods" @click="addOrderList(items)">
                  <span>{{items.goodsName}}</span>
                  <span class="o-price">￥{{items.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="主食">
                <div>
                  <ul class="main-food">
                    <li v-for="items in type0Goods" @click="addOrderList(items)">
                      <span class="foodImg"><img :src="items.goodsImg" width="80px" height="80px"></span>
                      <span class="foodName">{{items.goodsName}}</span><br>
                      <span class="foodPrice">￥{{items.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>

              <el-tab-pane label="零食" @click="addOrderList(items)">
                <div>
                  <ul class="main-food">
                    <li v-for="items in type1Goods">
                      <span class="foodImg"><img :src="items.goodsImg" width="80px" height="80px"></span>
                      <span class="foodName">{{items.goodsName}}</span><br>
                      <span class="foodPrice">￥{{items.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料" @click="addOrderList(items)">
                <div>
                  <ul class="main-food">
                    <li v-for="items in type2Goods">
                      <span class="foodImg"><img :src="items.goodsImg" width="80px" height="80px"></span>
                      <span class="foodName">{{items.goodsName}}</span><br>
                      <span class="foodPrice">￥{{items.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class="main-food">
                    <li v-for="items in type3Goods" @click="addOrderList(items)">
                      <span class="foodImg"><img :src="items.goodsImg" width="80px" height="80px"></span>
                      <span class="foodName">{{items.goodsName}}</span><br>
                      <span class="foodPrice">￥{{items.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>

      </el-row>
    </div>
</template>

<script>
  import axios from 'axios'

    export default {
        name: "Pos",
        data(){
          return{
             tableData:[],
            // tableData:[
            //   {
            //     goodsName:'普通凉皮',
            //     price:6,
            //     count:1
            //   },
            //   {
            //     goodsName:'纯瘦肉夹馍',
            //     price:7,
            //     count:1
            //   },
            //   {
            //     goodsName:'冰峰',
            //     price:2,
            //     count:1
            //   }
            // ],
            hotGoods:[],
            type0Goods:[],
            type1Goods:[],
            type2Goods:[],
            type3Goods:[],
            totalMoney:0,
            totalCount:0
            // hotGoods:[
            //   {
            //     goodsId:1,
            //     goodsName:'普通凉皮',
            //     price:6
            //   },
            //   {
            //     goodsId:2,
            //     goodsName:'麻酱凉皮',
            //     price:8
            //   },
            //   {
            //     goodsId:3,
            //     goodsName:'纯瘦肉加馍',
            //     price:7
            //   },
            //   {
            //     goodsId:4,
            //     goodsName:'紫菜蛋花汤',
            //     price:4
            //   },
            //   {
            //     goodsId:5,
            //     goodsName:'南瓜粥',
            //     price:4
            //   },
            //   {
            //     goodsId:6,
            //     goodsName:'可口可乐',
            //     price:2.5
            //   },
            //   {
            //     goodsId:7,
            //     goodsName:'砂锅米线',
            //     price:9
            //   },
            //   {
            //     goodsId:8,
            //     goodsName:'招牌凉皮',
            //     price:6.5
            //   }
            // ],
            // type0Goods:[
            //   {
            //     goodsId:1,
            //     goodsName:'普通凉皮',
            //     price:6,
            //     img:'http://img1.imgtn.bdimg.com/it/u=1717572801,3620482052&fm=200&gp=0.jpg'
            //   },
            //   {
            //     goodsId:2,
            //     goodsName:'麻酱凉皮',
            //     price:8,
            //     img:'http://img4.imgtn.bdimg.com/it/u=3460149761,3162029949&fm=27&gp=0.jpg'
            //   },
            //   {
            //     goodsId:3,
            //     goodsName:'纯瘦肉加馍',
            //     price:7,
            //     img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2535625473,1024239213&fm=27&gp=0.jpg'
            //
            //   },
            //   {
            //     goodsId:4,
            //     goodsName:'紫菜蛋花汤',
            //     price:4,
            //     img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1047016638,1015728081&fm=27&gp=0.jpg'
            //   },
            //   {
            //     goodsId:5,
            //     goodsName:'美味南瓜粥',
            //     price:4,
            //     img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=692183911,3234097572&fm=200&gp=0.jpg'
            //   },
            //   {
            //     goodsId:6,
            //     goodsName:'可口可乐',
            //     price:2.5,
            //     img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1140806848,2011110655&fm=200&gp=0.jpg'
            //   },
            //   {
            //     goodsId:7,
            //     goodsName:'砂锅米线',
            //     price:9,
            //     img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=696266270,2835203644&fm=27&gp=0.jpg'
            //   },
            //   {
            //     goodsId:8,
            //     goodsName:'招牌凉皮',
            //     price:6.5,
            //     img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2104274955,2117326591&fm=27&gp=0.jpg'
            //   },
            //   {
            //     goodsId:9,
            //     goodsName:'普通凉皮',
            //     price:6,
            //     img:'http://img1.imgtn.bdimg.com/it/u=1717572801,3620482052&fm=200&gp=0.jpg'
            //   },
            //   {
            //     goodsId:10,
            //     goodsName:'麻酱凉皮',
            //     price:8,
            //     img:'http://img4.imgtn.bdimg.com/it/u=3460149761,3162029949&fm=27&gp=0.jpg'
            //   },
            //   {
            //     goodsId:11,
            //     goodsName:'纯瘦肉加馍',
            //     price:7,
            //     img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2535625473,1024239213&fm=27&gp=0.jpg'
            //
            //   },
            //   {
            //     goodsId:12,
            //     goodsName:'紫菜蛋花汤',
            //     price:4,
            //     img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1047016638,1015728081&fm=27&gp=0.jpg'
            //   },
            //   {
            //     goodsId:13,
            //     goodsName:'美味南瓜粥',
            //     price:4,
            //     img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=692183911,3234097572&fm=200&gp=0.jpg'
            //   }
            // ]
          }
        },
      created:function(){
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
          .then(response=>{
           // console.log(response);
            this.hotGoods = response.data;
          })
          .catch(error=>{
            // console.log(error);
            alert('网络错误，不能访问');
          })
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
          .then(response=>{
             console.log(response);
             this.type0Goods=response.data[0];
            this.type1Goods=response.data[1];
            this.type2Goods=response.data[2];
            this.type3Goods=response.data[3];
            // this.hotGoods = response.data;
          })
          .catch(error=>{
            // console.log(error);
            alert('网络错误，不能访问');
          })
      },
      mounted:function () {
        var orderhight = document.body.clientHeight;
        console.log(orderhight);
        document.getElementById('order-list').style.height=orderhight+'px';
      },
      methods:{


          addOrderList(goods){
            this.totalMoney=0; //总金额
            this.totalCount=0; //总数量
            //1.判断商品是否存在列表中
            let ishave = false;
            for(let i = 0;i<this.tableData.length;i++){
              if(this.tableData[i].goodsId==goods.goodsId){
                ishave = true;
              }
            }
            //2.根据判断，如果有,改变列表中商品的数量; 如果没有 添加属性并压入表格中 注意初始第一次压入数量为1
            if(ishave){
              let arr = this.tableData.filter(a=>a.goodsId==goods.goodsId);
              arr[0].count++;
              // filter 的用法
              // var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
              // const result = words.filter(word => word.length > 6);
              // console.log(result);
              // // expected output: Array ["exuberant", "destruction", "present"]
              // console.log(arr);
            }else{
              let newGoods = {goodsId:goods.goodsId,goodsName : goods.goodsName,price:goods.price,count:1}
              this.tableData.push(newGoods);
            }
           this.getAllMoney();
          },
        //删除单个商品
          delSignalGoods(goods){
           this.tableData = this.tableData.filter(a=>a.goodsId!=goods.goodsId); //更新数据
            this.getAllMoney();
          },
        delAllGoods(){
            this.tableData=[];
            this.totalMoney= 0;
            this.totalCount=0;
        },
        checkOut(){
          if(this.totalCount!=0){
            this.tableData = [];
            this.totalCount=0;
            this.totalMoney = 0;
            this.$message({
              message:'结账成功，又挣钱了✌！',
              type:'success'
            })
          }else{
            this.$message.error('请先选择商品再结账哦~')
          }
        },
        //计算总额和数量的方法
        getAllMoney(){
            this.totalMoney = 0;
            this.totalCount = 0;
            if(this.tableData){
              //主要计算价格数量
              this.tableData.forEach(element=>{
                this.totalCount += element.count;
                this.totalMoney = this.totalMoney+(element.count*element.price)
              })
            }
        }
      }
    }

</script>

<style scoped>
.pos-order{
  background-color:#f9fafc;
  border-right: 1px solid #C0CCDA;
}
  .btn{
    margin-top: 15px;
  }
  .title{
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
  }
  .hot-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    border-radius: 10px;
    padding: 10px;
    margin: 20px;
    background-color: #ffffff;
    cursor: pointer;
  }
  .o-price{
    color:#58b7ff;
  }
.goods-type{
  clear: both;
  padding-left: 20px;

}
  .main-food li{
    list-style: none;
    border: 1px solid #E8E9F2;
    height: auto;
    overflow: hidden;
    background-color: #ffff;
    float: left;
    margin: 10px;
    width:17%;
    cursor: pointer;
  }
  .main-food li span{
    display: block;
    float: left;
  }
.foodName{
  font-size: 18px;
  padding-left: 10px;
  color: brown;
  padding-top: 10px;
  /*设置超过下列宽度时，超过的部分用...替代*/
  width: 90px;
  white-space:nowrap;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  overflow:hidden;
}
  .foodPrice{
    font-size: 16px;
    margin-left: -75px;
    padding-top: 30px;
  }
  .ad{
    background: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3dce6;
  }

</style>
