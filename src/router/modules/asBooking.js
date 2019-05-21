/** These are routes for agent system-> bookings*/

import Layout from '@/views/layout/Layout'

const asBookingRouter = {
  path: '/booking',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: 'booking',
    icon: 'money',
    roles: ['admin']
  },
  children: [
    {
      path: 'product-list',
      component: () => import('@/views/as-booking/products'),
      name: 'product-list',
      meta: {
        title: 'productList',
        roles: ['']
      }
    },
    {
      path: 'shopping-cart',
      component: () => import('@/views/as-booking/shoppingCart'),
      name: 'shopping-cart',
      meta: {
        title: 'shoppingCart',
        roles: ['']
      }
    },
    {
      path: 'booking-list',
      component: () => import('@/views/as-booking/bookings'),
      name: 'booking-list',
      meta: {
        title: 'bookingList',
        roles: ['']
      }
    }
    // {
    //   path: 'RechargeList',
    //   component: () => import('@/views/bookings/recharges/index'),
    //   name: 'RechargeList',
    //   meta: {
    //     title: 'rechargeList',
    //     roles: ['admin']
    //   }
    // },
    // {
    //   path: 'rechargeEntrance',
    //   component: () => import('@/views/bookings/recharges/entrance'),
    //   name: 'RechargeEntrance',
    //   meta: {
    //     title: 'rechargeEntrance',
    //     roles: ['']
    //   }
    // }
  ]
}

export default asBookingRouter
