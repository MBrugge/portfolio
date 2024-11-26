<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { RouterLink } from 'vue-router';

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <section id="hero"
        class="min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden">
        <h1 class="text-5xl font-bold mb-4 relative z-10">Marten Brugge</h1>
        <div class="w-full px-4 sm:w-2/5 relative z-10">
            <Separator />
        </div>
        <div class="flex flex-col pt-2 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 relative z-10">
            <p class="text-xl">Fullstack Developer</p>
            <p class="text-xl">Problem Solver</p>
        </div>
        <div class="mt-6 flex flex-col items-center space-y-4 relative z-10">
            <button @click="scrollToSection('about')"
                class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">
                About me
            </button>
            <button @click="scrollToSection('contact')"
                class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">
                Contact
            </button>
            <RouterLink to="/projects"
                class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">
                View Projects
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
#hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/img/hero-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    z-index: 1;
    opacity: 0.5;
}

#hero>* {
    position: relative;
    z-index: 10;
}
</style>