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
                  <template solt-scope="scope">
                    <el-Button type="text" size="small">删除</el-Button>
                    <el-Button type="text" size="small">增加</el-Button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="btn">
                <el-button type="success">结账</el-button>
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
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
                <li v-for="items in hotGoods">
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
                    <li v-for="items in type0Goods">
                      <span class="foodImg"><img :src="items.img" width="80px" height="80px"></span>
                      <span class="foodName">{{items.goodsName}}</span><br>
                      <span class="foodPrice">￥{{items.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>

              <el-tab-pane label="酒水">
                这是酒水页面
              </el-tab-pane>
              <el-tab-pane label="套餐">
                这是套餐页面
              </el-tab-pane>
              <el-tab-pane label="零食">
                这是零食页面
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>

      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Pos",
        data(){
          return{
            tableData:[
              {
                goodsName:'普通凉皮',
                price:6,
                count:1
              },
              {
                goodsName:'纯瘦肉夹馍',
                price:7,
                count:1
              },
              {
                goodsName:'冰峰',
                price:2,
                count:1
              }
            ],
            hotGoods:[
              {
                goodsId:1,
                goodsName:'普通凉皮',
                price:6
              },
              {
                goodsId:2,
                goodsName:'麻酱凉皮',
                price:8
              },
              {
                goodsId:3,
                goodsName:'纯瘦肉加馍',
                price:7
              },
              {
                goodsId:4,
                goodsName:'紫菜蛋花汤',
                price:4
              },
              {
                goodsId:5,
                goodsName:'南瓜粥',
                price:4
              },
              {
                goodsId:6,
                goodsName:'可口可乐',
                price:2.5
              },
              {
                goodsId:7,
                goodsName:'砂锅米线',
                price:9
              },
              {
                goodsId:8,
                goodsName:'招牌凉皮',
                price:6.5
              }
            ],
            type0Goods:[
              {
                goodsId:1,
                goodsName:'普通凉皮',
                price:6,
                img:'http://img1.imgtn.bdimg.com/it/u=1717572801,3620482052&fm=200&gp=0.jpg'
              },
              {
                goodsId:2,
                goodsName:'麻酱凉皮',
                price:8,
                img:'http://img4.imgtn.bdimg.com/it/u=3460149761,3162029949&fm=27&gp=0.jpg'
              },
              {
                goodsId:3,
                goodsName:'纯瘦肉加馍',
                price:7,
                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2535625473,1024239213&fm=27&gp=0.jpg'

              },
              {
                goodsId:4,
                goodsName:'紫菜蛋花汤',
                price:4,
                img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1047016638,1015728081&fm=27&gp=0.jpg'
              },
              {
                goodsId:5,
                goodsName:'美味南瓜粥',
                price:4,
                img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=692183911,3234097572&fm=200&gp=0.jpg'
              },
              {
                goodsId:6,
                goodsName:'可口可乐',
                price:2.5,
                img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1140806848,2011110655&fm=200&gp=0.jpg'
              },
              {
                goodsId:7,
                goodsName:'砂锅米线',
                price:9,
                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=696266270,2835203644&fm=27&gp=0.jpg'
              },
              {
                goodsId:8,
                goodsName:'招牌凉皮',
                price:6.5,
                img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2104274955,2117326591&fm=27&gp=0.jpg'
              },
              {
                goodsId:9,
                goodsName:'普通凉皮',
                price:6,
                img:'http://img1.imgtn.bdimg.com/it/u=1717572801,3620482052&fm=200&gp=0.jpg'
              },
              {
                goodsId:10,
                goodsName:'麻酱凉皮',
                price:8,
                img:'http://img4.imgtn.bdimg.com/it/u=3460149761,3162029949&fm=27&gp=0.jpg'
              },
              {
                goodsId:11,
                goodsName:'纯瘦肉加馍',
                price:7,
                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2535625473,1024239213&fm=27&gp=0.jpg'

              },
              {
                goodsId:12,
                goodsName:'紫菜蛋花汤',
                price:4,
                img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1047016638,1015728081&fm=27&gp=0.jpg'
              },
              {
                goodsId:13,
                goodsName:'美味南瓜粥',
                price:4,
                img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=692183911,3234097572&fm=200&gp=0.jpg'
              }
            ]
          }
        },
      mounted:function () {
        var orderhight = document.body.clientHeight;
        console.log(orderhight);
        document.getElementById('order-list').style.height=orderhight+'px';
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
}
  .foodPrice{
    font-size: 16px;
    margin-left: -75px;
    padding-top: 30px;
  }

</style>
