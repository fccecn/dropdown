import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: { title: '首页', hide: true },
    component: () => import('../views/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export const initRouter = (app: App<Element>) => {
  app.use(router);
}
