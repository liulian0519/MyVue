<template>
    <div class="pos">
      <el-row>
        <el-col :span="7" class="pos-order" id="order-list">
          我是订单蓝
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
</style>
