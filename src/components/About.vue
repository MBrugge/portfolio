<script setup lang="ts">
import Separator from '@/components/ui/separator/Separator.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
    { value: 'item-1', title: 'Who am I?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
    { value: 'item-2', title: 'What can I work with?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
    { value: 'item-3', title: 'What have I done?', content: 'Yes! You can use the transition prop to configure the animation.' },
]
</script>

<template>
    <section id="about"
        class="min-h-screen w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-customBlue">
        <h1 class="text-5xl font-bold mb-4 relative z-10">About me</h1>
        <div class="w-full px-4 sm:w-2/5 relative z-10">
            <Separator />
        </div>
        <Accordion type="single" class="w-full px-4 sm:w-2/5 relative z-10" collapsible :default-value="defaultValue">
            <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
                <AccordionTrigger>{{ item.title }}</AccordionTrigger>
                <AccordionContent>
                    {{ item.content }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
</template>