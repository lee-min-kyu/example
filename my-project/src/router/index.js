import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import Main from '@/components/Main'
import HomeTab from '@/components/HomeTab'
import AboutTab from '@/components/AboutTab'
import CompanyTab from '@/components/CompanyTab'
import PartnerTab from '@/components/PartnerTab'
import AboutContents from '@/components/AboutContents'
import AboutLinks from '@/components/AboutLinks'

import Instrutors from '@/components/Instrutors'
import Partner from '@/components/Partner'
import Footer from '@/components/Footer'

Vue.use(Router)
Vue.use(VueMaterial)
Vue.component('home-tab', HomeTab);
Vue.component('about-tab', AboutTab);
Vue.component('company-tab', CompanyTab);
Vue.component('partner-tab', PartnerTab);
Vue.component('about-contents', AboutContents);
Vue.component('about-links', AboutLinks);
Vue.component('instrutors-tag', Instrutors);
Vue.component('partner-tag', Partner);
Vue.component('footer-tag', Footer);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
