import {RxDashboard,RxComponent1,RxLightningBolt} from 'react-icons/rx'

export const PAGES = [
  {
    label: 'Dashboard', 
    path: '/dashboard',
    icon: RxDashboard,
    regex: /^\/dashboard$/,
  },
  {
    label: 'Categorias', 
    path: '/dashboard/categories',
    icon: RxComponent1,
    regex: /^\/dashboard\/categories/,
  },
  {
    label: 'Posts', 
    path: '/dashboard/posts',
    icon: RxLightningBolt,
    regex: /^\/dashboard\/posts/,
  },
]