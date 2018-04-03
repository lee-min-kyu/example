import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutTab from '@/components/AboutTab'
import CompanyTab from '@/components/CompanyTab'
import Footer from '@/components/Footer'

Vue.use(Router)
Vue.component('about-tab', AboutTab);
Vue.component('company-tab', CompanyTab);
Vue.component('footer-tag', Footer);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
