<script setup lang="ts">
import { computed } from 'vue';
import Separator from '@/components/ui/separator/Separator.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// Accordion Logic
const defaultValue = 'item-1'
const accordionItems = computed(() => [
    { value: 'item-1', title: 'Who am I?', content: `I am a ${age.value} year old software developer from the Netherlands. I am currently studying Software Developer at Alfa-College in Groningen.` },
    { value: 'item-2', title: 'What can I work with?', content: 'I have varying degrees of experience in a variety of languages and frameworks such as: Vue, Svelte, Laravel, TS, JS HTML, CSS, Go.' },
    { value: 'item-3', title: 'What have I done?', content: 'I have earned my MAVO-tl diploma. I have finished Cambridge at C2 level. I am currently working to earn my degree for Software Developer.' },
]);

// Age logic
const birthDate = new Date(2003, 10, 15); // Year, Month(0-11), and Day(1-31)
const currentDate = new Date();

const calculateAge = (birthDate: Date, currentDate: Date): number => {
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
};

const age = computed(() => calculateAge(birthDate, currentDate));
</script>

<template>
    <section id="about"
        class="min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-customBlue">
        <h1 class="text-5xl font-bold mb-4 relative z-10">About me</h1>
        <div class="w-full px-4 sm:w-2/5 relative z-10">
            <Separator />
        </div>
        <Accordion type="single" class="w-full px-4 sm:w-2/5 relative z-10 text-start" collapsible
            :default-value="defaultValue">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
                <AccordionTrigger>{{ item.title }}</AccordionTrigger>
                <AccordionContent>
                    {{ item.content }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
</template>