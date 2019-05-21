/** These are routes for agent system-> agents*/

import Layout from '@/views/layout/Layout'

const asAgentRouter = {
  path: '/agent',
  component: Layout,
  alwaysShow: true,
  meta: {
    title: 'agent',
    icon: 'money',
    roles: ['admin']
  },
  children: [
    {
      path: 'agent-list',
      component: () => import('@/views/as-agent/agents'),
      name: 'agent-list',
      meta: {
        title: 'agentList',
        roles: ['']
      }
    },
    {
      path: 'service-agentList',
      component: () => import('@/views/as-agent/serviceAgents'),
      name: 'service-agentList',
      meta: {
        title: 'serviceAgentList',
        roles: ['']
      }
    }
  ]
}

export default asAgentRouter
