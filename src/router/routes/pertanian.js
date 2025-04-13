const pertanian={
  path: '/pertanian',
  component: () => import('../../layouts/MainLayout.vue'),
  meta: { requireAuth: true },
  children: [
    
  ]
}
export default pertanian
