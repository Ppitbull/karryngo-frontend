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
    url: '/profil',
    icon: 'fa fa-user'
  },
  {
    name: 'Wallet',
    url: '/walet',
    icon: 'fa fa-wallet',
    children: [
      {
        name: 'Deposit',
        url: '/wallet/deposit',
        icon: 'none'
      },
      {
        name: 'Withdrawal',
        url: '/wallet/withdrawal',
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
    url: '/carrier',
    icon: 'fa fa-truck',
    children: [
      {
        name: 'Vehiculs',
        url: '/carrier/vehiculs',
        icon: 'none'
      },
      {
        name: 'Settings',
        url: '/carrier/settings',
        icon: 'none'
      },
    ]
  },
  {
    name: 'Trips',
    url: '/trips',
    icon: 'fa fa-bus',
    children: [
      {
        name: 'Vehiculs',
        url: '/trips/vehiculs',
        icon: 'none'
      },
      {
        name: 'Settings',
        url: '/trips/settings',
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
    url: '/post-requests',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Packages',
        url: '/post-requests/packages',
        icon: 'none',
      },
      {
        name: 'Trips',
        url: '/post-requests/trips',
        icon: 'none'
      }
    ]
  },
  {
    name: 'Chat',
    url: '/chat',
    icon: 'icon-speech'
  },
  {
    name: 'Map',
    url: '/map',
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
