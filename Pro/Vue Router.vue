<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default {
    router
};
</script>