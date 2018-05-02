<template>
<div>
  <h1 v-for="(pro, index) in productall" :key="index">
    <div @click="chooseProduct(index)">
      {{pro.name}}
      </div>
  </h1>
  <div>
    <h2>รายการสั่งซื้อ</h2>
  <div v-for="(chooseItem, index) in chooseItems" :key="index">
    {{chooseItem}}
  </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      product: [],
      chooseItems: {}
    }
  },
  created () {
    this.showProduct()
  },
  computed: {
    ...mapGetters([
      'productall'
    ])
  },
  methods: {
    ...mapActions([
      'showProduct'
    ]),
    chooseProduct (index) {
      this.chooseItems.push(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
