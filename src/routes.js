import PublicLayout from './layouts/PublicLayout.svelte'

import Index from './pages/Index.svelte'
import About from './pages/About.svelte'
import Users from './pages/Users.svelte'

const routes = [
  {
    name: '/',
    component: Index,
    layout: PublicLayout
  },
  {
    name: '/about',
    component: About,
    layout: PublicLayout
  },
  {
    name: '/users',
    component: Users,
    layout: PublicLayout
  }
];

export {
  routes
}