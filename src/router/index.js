import Vue from 'vue'
import VueRouter from 'vue-router';
import Posts from "../views/Posts";
import PostDetail from "../views/PostDetail";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Posts
    },
    {
        path: '/post-detail/:id',
        component: PostDetail
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
