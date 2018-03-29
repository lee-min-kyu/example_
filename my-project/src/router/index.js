import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AboutTab from '@/components/AboutTab'
import CompanyTab from '@/components/CompanyTab'
import PartnerTabTab from '@/components/PartnerTab'
import BusinessTab from '@/components/BusinessTab'
import CoursesTab from '@/components/CoursesTab'
import ContactsTab from '@/components/ContactsTab'
import Footer from '@/components/Footer'


Vue.component('about-tab-tag', AboutTab)
Vue.component('company-tab-tag', CompanyTab)
Vue.component('partner-tab-tag', PartnerTabTab)
Vue.component('business-tab-tag', BusinessTab)
Vue.component('courses-tab-tag', CoursesTab)
Vue.component('contacts-tab-tag', ContactsTab)
Vue.component('footer-tag', Footer)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
