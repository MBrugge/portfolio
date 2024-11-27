<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import projectsData from '@/data/projects.json';
import { ref } from 'vue';

const projects = ref(projectsData);
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card v-for="project in projects" :key="project.id">
            <CardHeader>
                <CardTitle>{{ project.name }}</CardTitle>
                <CardDescription>{{ project.framework }}</CardDescription>
            </CardHeader>
            <CardContent>
                {{ project.description }}
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    </div>
</template>