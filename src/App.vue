<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
    <Navbar />

    <main class="flex flex-col justify-center items-center min-h-screen">
        <RouterView />
    </main>
</template>