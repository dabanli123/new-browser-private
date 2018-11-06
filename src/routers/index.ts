import asyncComponent from '@/components/asyncComponent';
// import redirectComponent from '@/components/redirectComponent';

export default [
  {
    component: asyncComponent(() => import('../containers/nns/nnsbeinglist')),
    path: '/nnsbeing',
  },
  {
    component: asyncComponent(() => import('../containers/nns/nnsranklist')),
    path: '/nnsrank',
  },
  {
    component: asyncComponent(() => import('../containers/nns/nnsinfo')),
    path: '/nnsinfo',
  },
  {
    component: asyncComponent(() => import('../containers/nns')),
    path: '/nns',
  },
  {
    component: asyncComponent(() => import('../containers/asset/assetinfo')),
    path: '/asset',
  },
  {
    component: asyncComponent(() => import('../containers/asset')),
    path: '/assets',
  },
  {
    component: asyncComponent(() => import('../containers/address/addressinfo')),
    path: '/address',
  },
  {
    component: asyncComponent(() => import('../containers/address')),
    path: '/addresses',
  },
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
    path: '/block/:index',
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

