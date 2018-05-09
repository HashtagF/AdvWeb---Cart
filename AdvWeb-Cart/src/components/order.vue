<template>
<div>
   <div>
    <h2>รายการสั่งซื้อ</h2>
  <div v-for="(chooseItem, index) in chooseItems" :key="index">
    {{chooseItem}}
  </div>
  <div>
    <button @click="payment()">ชำระเงิน</button>
  </div>
    </div>
  <h1 v-for="(pro, index) in productall" :key="index">
    <div @click="chooseProduct(pro)">
      {{pro.name}}
      </div>
  </h1>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      product: [],
      chooseItems: [],
      countItems: []
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
      'showProduct',
      'updateStock'
    ]),
    chooseProduct (index) {
      if (this.chooseItems.indexOf(index) === -1) {
        this.chooseItems.push(index)
        this.countItems[index.name] = 1
      } else {
        if (this.countItems[index.name] < index.count) {
          this.countItems[index.name] = this.countItems[index.name] + 1
        }
      }
    },
    payment () {
      this.updateStock(this.countItems)
      this.chooseItems = []
      this.countItems = []
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
