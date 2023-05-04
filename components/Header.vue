<script setup lang="ts">
import { useUserStore } from "@/store/userStore";

const userStore = useUserStore();
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <NuxtLink to="/dashboard" class="navbar-brand">
                    <img alt="Vue logo" src="../assets/logo.png" style="height:25px;" />
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <NuxtLink to="/region" class="nav-link">Region Chart</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/comparisonChart" class="nav-link">Comparison Chart</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/notice" class="nav-link">Notice</NuxtLink>
                        </li>
                    </ul>
                    <div class="navbar-info">
                        <div>
                            <span>{{ userStore.userInfo.length > 0 ? userStore.userInfo[0].username : null }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav .navbar-nav a.nav-link {
    font-weight: bold;
    color: #2c3e50 !important;
    text-align: initial;
}

nav .navbar-nav a.router-link-exact-active {
    color: #42b983 !important;
}

.navbar-info a {
    font-weight: bold;
    color: #2c3e50 !important;
    text-decoration: none;
}

.navbar-info span {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    margin-right: 1rem;
}
</style>