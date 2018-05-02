<template>
<div>
  <h1 v-for="(pro, index) in product" :key="index">
    <div @click="chooseProduct(index)">
      {{pro}}
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
export default {
  data () {
    return {
      product: [],
      chooseItems: []
    }
  },
  created () {
    for (var i = 0; i < 10; i++) {
      this.product[i] = '123'
    }
  },
  methods: {
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
