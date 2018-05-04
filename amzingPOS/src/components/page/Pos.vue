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
        <el-col>
          我是产品蓝
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
                goodsName:'凉皮',
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
</style>
