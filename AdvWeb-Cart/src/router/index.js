import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import order from '@/components/order'
=======
import Input from '@/components/Input'
>>>>>>> 2339330b08a5cf72714072748c87175feb80a837

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/order',
      name: 'order',
      component: order
=======
      name: 'Input',
      component: Input
>>>>>>> 2339330b08a5cf72714072748c87175feb80a837
    }
  ]
})
