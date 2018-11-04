import asyncComponent from '@/components/asyncComponent';
// import redirectComponent from '@/components/redirectComponent';

export default [
  {
    component: asyncComponent(() => import('../containers/block')),
    path: '/block',
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

