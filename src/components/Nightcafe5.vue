<script setup>

import { ref } from 'vue';

const Nightcafe = ref([
  {
    "id": 5,
    "name": "Lism cafe",
    "coverimage": "https://img.wongnai.com/p/1920x0/2019/07/14/7e31672612ba4462b77d77cd41ca83e7.jpg",
    "price": "150 $"
  }
])


</script>

<template>
  <h1 style="margin-top: 20px; text-align: center; font-size: 50px;">
    Lism cafe
  </h1><hr>
  <div class="card" v-for="(n) in Nightcafe" :key="n">
    <img :src="n.coverimage" :alt="name" style="width:100%">
    <div class="container-all">
      <h2>{{ n.name }}</h2>
      <p style="margin-top: 10px; font-size: 16px;">{{ n.review }}</p>
      <div class="container">
        <p style="margin-top: 10px; margin-bottom: 10px; font-size: 16px;">lism เป็นร้่านอาหารกึ่งผับ เปิดบริการประมาณ 5 โมงเย็น ถึง เที่ยงคืน</p>
        <p style="margin-top: 10px; font-size: 16px;">ราคาโต๊ะ : {{n.price}}</p>
        <button type="button" class="btn">จองโต๊ะ</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

hr {
  margin-top: 15px;
  margin-bottom: 15px;
  opacity: .50;
}
.card {
  box-shadow: 0 4px 8px 0 rgb(255, 189, 57);
  transition: 0.6s;
  margin: 30px;
  border-radius: 10px;
  background-color: #f4e6e6;
  margin-left: 300px;
  margin-right: 300px;
}
.container-all {
  padding: 20px 25px;
}

.container {
  text-align: center;
}
.btn {
  text-align: center;
  width: 80px;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  background-color: rgb(242, 208, 255);
  border: 0;
}

.btn:hover {
  color: rgba(234, 139, 253, 0.368);
  background-color: rgba(89, 56, 125, 0.734);
  transition: 0.6s;
  border: 0;
}
</style>