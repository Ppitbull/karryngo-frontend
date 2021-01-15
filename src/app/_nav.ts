import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-dashboard'
  },
  {
    title: true,
    name: 'User',
  },
  {
    name: 'Profil',
    url: '/theme/colors',
    icon: 'fa fa-user'
  },
  {
    name: 'Wallet',
    url: '/theme',
    icon: 'fa fa-wallet',
    children: [
      {
        name: 'Deposit',
        url: '/theme/typography',
        icon: 'none'
      },
      {
        name: 'Withdrawal',
        url: '/theme/typography',
        icon: 'none'
      },
    ]
  },
  {
    title: true,
    name: 'Transport'
  },
  {
    name: 'Carrier',
    url: '/base',
    icon: 'fa fa-truck',
    children: [
      {
        name: 'Vehicul',
        url: '/base/cards',
        icon: 'none'
      },
      {
        name: 'Settings',
        url: '/base/carousels',
        icon: 'none'
      },
    ]
  },
  {
    name: 'Trips',
    url: '/buttons',
    icon: 'fa fa-bus',
    children: [
      {
        name: 'Vehicul',
        url: '/base/cards',
        icon: 'none'
      },
      {
        name: 'Settings',
        url: '/base/carousels',
        icon: 'none'
      },
    ]
  },
  {
    title: true,
    name: 'Services'
  },
  {
    name: 'Post Requests',
    url: '/icons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Packages',
        url: '/icons/coreui-icons',
        icon: 'none',
      },
      {
        name: 'Trips',
        url: '/icons/flags',
        icon: 'none'
      }
    ]
  },
  {
    name: 'Chat',
    url: '/charts',
    icon: 'icon-speech'
  },
  {
    name: 'Map',
    url: '/notifications',
    icon: 'icon-map'
  },
  {
    divider: true
  },
  {
    name: 'Karryngo Support',
    url: 'http://karryngo.com/support/',
    icon: 'fa fa-question-circle',
    class: 'mt-auto',
    variant: 'dark',
    attributes: { target: '_blank', rel: 'noopener' }
  },
];
