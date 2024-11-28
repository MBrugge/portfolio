<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import projectsData from '@/data/projects.json';
import { ref } from 'vue';

const projects = ref(projectsData);
</script>

<template>
    <div class="flex flex-wrap justify-center pt-12 w-full max-w-screen">
        <Card v-for="project in projects" :key="project.id"
            class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-2 rounded-lg flex flex-col bg-customBlue bg-opacity-50">
            <div class="flex-grow">
                <CardHeader class="border-b pb-4 mb-4">
                    <CardTitle class="text-xl font-bold">{{ project.name }}</CardTitle>
                    <CardDescription class="text-textGrey">{{ project.framework }}</CardDescription>
                </CardHeader>
                <CardContent class="mb-12 overflow-y-auto">
                    {{ project.description }}
                </CardContent>
            </div>
            <CardFooter class="pt-4 border-t flex justify-center space-x-4">
                <a v-if="project.path" :href="project.path" target="_blank"
                    class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue text-center transition-colors duration-300">
                    Project
                </a>
                <a v-if="project.repo" :href="project.repo" target="_blank"
                    class="w-48 px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue text-center transition-colors duration-300">
                    Repo
                </a>
            </CardFooter>
        </Card>
    </div>
</template>