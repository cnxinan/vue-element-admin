/** These are routes for agent system-> product*/

import Layout from '@/views/layout/Layout'

const asProductRouter = {
  path: '/product',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: 'agent',
    icon: 'money',
    roles: ['admin']
  },
  children: [
    {
      path: 'brand-list',
      component: () => import('@/views/as-product/brand'),
      name: 'brand-list',
      meta: {
        title: 'brandList',
        roles: []
      }
    },
    {
      path: 'product-list',
      component: () => import('@/views/as-product/product')
    }
  ]
}

export default asProductRouter
