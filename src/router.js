import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ChatPage from './pages/ChatPage.vue'

const routes = [
    {
        path: "/",
        name: "home", 
        component: HomePage
    },
    {
        path: "/chat/:user", 
        name: "chat",
        component: ChatPage
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes 
})