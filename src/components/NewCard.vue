<script>
export default {
  props: ['id', 'name', 'coverimage', 'more']
}
</script>

<template>
  <div class="card">
    <img :src="coverimage" :alt="name" style="width:100%">
    <div class="container">
      <h2><b>{{ name }}</b></h2>
    

      <router-link :to="'/Nightcafe/'+id">
        <button style="display: block; margin: 0 auto; background-color: #a980de; color: #ffffff;">{{ more }}</button>
      </router-link>


    </div>
    <RouterView/>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 #ffeede;
  transition: 0.6s;
  margin: 30px;
  border-radius: 10px;
  background-color: #ffdbb2;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgb(118, 116, 116);
  padding: 20px;
}
.container {
  padding: 10px 25px;
}
</style>