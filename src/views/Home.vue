<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { RouterLink } from 'vue-router';

function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.location.hash = sectionId;
    }
}
</script>

<template>
    <section id="hero" class="min-h-screen flex flex-col justify-center items-center text-center">
        <h1 class="text-5xl font-bold mb-4">Marten Brugge</h1>
        <div class="w-full px-4">
            <Separator />
        </div>
        <div class="flex flex-col pt-2 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <p class="text-xl">Fullstack Developer</p>
            <p class="text-xl">Problem Solver</p>
        </div>
        <div class="mt-6 flex flex-col space-y-4">
            <button @click="scrollToSection('about')" class="px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-gray-800">
                About me
            </button>
            <button @click="scrollToSection('contact')" class="px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-gray-800">
                Contact
            </button>
            <RouterLink to="/projects" class="px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-gray-800 text-center">
                View Projects
            </RouterLink>
        </div>
    </section>
</template>