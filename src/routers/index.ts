import asyncComponent from '@/components/asyncComponent';
// import redirectComponent from '@/components/redirectComponent';

export default [
  {
    component: asyncComponent(() => import('../containers/transaction/traninfo')),
    path: '/transaction',
  },
  {
    component: asyncComponent(() => import('../containers/transaction')),
    path: '/transactions',
  },
  {
    component: asyncComponent(() => import('../containers/block/blockinfo')),
    path: '/block',
  },
  {
    component: asyncComponent(() => import('../containers/block')),
    path: '/blocks',
  },
  {
    component: asyncComponent(() => import('../containers/notfound')),
    path: '/:any',
  },
  {
    component: asyncComponent(() => import('../containers/home')),
    exact: true,
    path: '/',
  },
];

