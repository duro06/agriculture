const peternakan={
  path: '/peternakan',
  component: () => import('../../layouts/MainLayout.vue'),
  meta: { requireAuth: true },
  children: [
    
  ]
}
export default peternakan
