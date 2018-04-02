import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestList from '@/components/List'
import Compo from '@/components/Compo'
import MenuIcon from 'vue-material-design-icons/menu.vue'
import MainPage from '@/components/test6.vue'
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'

/** Others */
import Feed from '@/components/Feed'
import FeedWrite from '@/components/FeedWrite'
import FileTable from '@/components/FileTable'
import ExpandList from '@/components/ExpandList.vue'
import DefaultList from '@/components/DefaultList.vue'
import GroupList from '@/components/GroupList.vue'


Vue.use(Router)
Vue.component('header-tag', Header);
Vue.component('test-compo', Compo);
Vue.component('main-page', MainPage);
Vue.component('menu-icon', MenuIcon);

Vue.component('feed', Feed);
Vue.component('feedwrite', FeedWrite);
Vue.component('fileTable', FileTable);
Vue.component('expandList', ExpandList);
Vue.component('defaultList', DefaultList);
Vue.component('groupList', GroupList);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
	 /* children: [
			{
			  path: '/list',
			  name: 'testList',
			  component: TestList
			},
		]*/
    }
  ]
})
