<script setup lang="ts">
import Separator from '@/components/ui/separator/Separator.vue';
</script>

<template>
    <section id="contact"
        class="min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden">
        <h1 class="text-5xl font-bold mb-4 relative z-10">Contact</h1>
        <div class="w-full px-4 sm:w-2/5 relative z-10">
            <Separator />
        </div>
        <div class="flex flex-col pt-2 space-y-2 relative z-10 sm:flex-row sm:space-y-0 sm:space-x-4">
            <p class="text-xl">Feel free to contact me if you are interested!</p>
        </div>
        <div class="mt-6 flex flex-col items-center space-y-4 relative z-10">
            <a href="https://www.linkedin.com/in/marten-brugge" target="_blank" class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">LinkedIn</a>
            <a href="mailto:martenbrugge@gmail.com" class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">Email Me</a>
        </div>
    </section>
</template>