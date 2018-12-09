import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Browse from './views/Browse.vue'
import Create from './views/Create.vue'
import ViewBook from './views/ViewBook.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/browse',
      name: 'Browse',
      component: Browse,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/view/:id',
      name: 'View',
      component: ViewBook,
    },
  ],
})
