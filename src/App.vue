<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="flex justify-center items-center h-4">
        <nav class="flex justify-center space-x-4">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
        </nav>
    </header>

    <main class="flex justify-center items-center min-h-screen">
        <RouterView />
    </main>
</template>
