<script setup lang="ts">
</script>

<template>
    <section id="about" class="min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden">
        <h2 class="text-4xl font-bold mb-4 relative z-10">About Me</h2>
        <p class="text-xl relative z-10 max-w-2xl">
            I am a passionate Fullstack Developer with experience in building web applications using modern technologies. I enjoy solving complex problems and continuously learning new skills to improve my craft.
        </p>
    </section>
</template>

<style scoped>
#about::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    z-index: 1;
    opacity: 0.5;
}

#about > * {
    position: relative;
    z-index: 10;
}
</style>