<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import projectsData from '@/data/projects.json';
import { ref } from 'vue';

const projects = ref(projectsData);
</script>

<template>
    <div class="flex flex-wrap justify-center">
        <Card v-for="project in projects" :key="project.id" class="w-full sm:w-1/2 lg:w-1/3 px-2 m-4">
            <CardHeader>
                <CardTitle>{{ project.name }}</CardTitle>
                <CardDescription>{{ project.framework }}</CardDescription>
            </CardHeader>
            <CardContent>
                {{ project.description }}
            </CardContent>
            <CardFooter>
                <a :href="project.path" target="_blank" class="px-4 py-2 font-bold border border-gray-300 rounded-lg hover:bg-customBlue">
                    View Project
                </a>
            </CardFooter>
        </Card>
    </div>
</template>