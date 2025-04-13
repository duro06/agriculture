const dasboard={
  path: '/dashboard',
  component: () => import('../../layouts/MainLayout.vue'),
  meta: { requireAuth: true },
  children: [
    
  ]
}
export default dasboard
