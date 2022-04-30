import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView'

const beforeEnter = (to, from, next) => {
    if (!localStorage.isAuthenticated) {
        next({ name: 'login' })
        return
    }
    next()
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        beforeEnter
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        beforeEnter
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        beforeEnter: (to, from, next) => {
            console.log(localStorage.isAuthenticated)
            if (localStorage.isAuthenticated) {
                next({ name: '/' })
                return
            }
            next()
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
