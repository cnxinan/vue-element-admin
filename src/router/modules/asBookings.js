/** These are routes for agent system-> bookings*/

import Layout from '@/views/layout/Layout'

const asBookingRouter = {
  path: '/bookings',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: 'bookings',
    icon: 'money',
    roles: ['admin']
  },
  children: [
    {
      path: 'ProductList',
      component: () => import('@/views/as-booking/products'),
      name: 'BookingList',
      meta: {
        title: 'productList',
        roles: ['']
      }
    },
    {
      path: 'ShoppingCart',
      component: () => import('@/views/as-booking/shoppingCart'),
      name: 'ShoppingCart',
      meta: {
        title: 'shoppingCart',
        roles: ['']
      }
    },
    {
      path: 'BookingList',
      component: () => import('@/views/as-booking/bookings'),
      name: 'BookingList',
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
