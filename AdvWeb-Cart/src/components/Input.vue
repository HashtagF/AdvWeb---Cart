<template>
  <div class="container">
    <div class="row pb-5">
      <div class="col">
        <h3 class="border">Get Products</h3>
      </div>
    </div>
    <form class="">
      <div class="row pb-4">
        <div class="col-6 text-right">
            <p> Name Product : </p>
            <p> Price : </p>
            <p> Count : </p>
        </div>
        <div class="col-6 text-left">
          <p><input type="text" value="" v-model="nameProduct"></p>
          <p><input type="number" value="" v-model="price"> บาท</p>
          <p><input type="number" value="" v-model="count"> หน่วย</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-info">Get Products</button>
          <button type="reset" class="btn btn-danger">Cancle</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      nameProduct: '',
      price: '',
      count: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
