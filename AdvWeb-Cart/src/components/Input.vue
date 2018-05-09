<template>
  <div class="container">
    <div class="row pb-5">
      <div class="col text-right">
        <router-link to='order'><button class="btn btn-info " >หน้าสินค้า</button></router-link>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col">
        <h3 class="border">Get Products</h3>
      </div>
    </div>
    <form class="">
      <div class="row pb-4">
        <div class="col-6 text-right">
            <p class="pb-2"> Name Product : </p>
            <p class="pb-2"> Price : </p>
            <p class="pb-2"> Count : </p>
            <p> Image : </p>
        </div>
        <div class="col-6 text-left">
          <p><input type="text" value="" v-model="product.name"></p>
          <p><input type="number" value="" v-model="product.price"> บาท</p>
          <p><input type="number" value="" v-model="product.count"> หน่วย</p>
          <p><input type="text" value="" v-model="product.img"></p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-info" @click="addProduct()">Get Products</button>
          <button type="reset" class="btn btn-danger">Cancle</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Input',
  data () {
    return {
      product: {
        name: '',
        price: '',
        count: '',
        img: ''
      }
    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      'inputProduct'
    ]),
    addProduct () {
      this.inputProduct(this.product)
      this.product.name = ''
      this.product.price = ''
      this.product.count = ''
      this.product.img = ''
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
