<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50">
        <nav class="flex justify-center space-x-8 p-4 font-bold">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
        </nav>
    </header>
</template>