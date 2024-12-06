<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const switchLanguage = (lang: string) => {
    locale.value = lang;
};

const { t } = useI18n();
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50">
        <nav class="flex justify-center space-x-8 p-4 font-bold">
            <RouterLink to="/">{{ t('Home') }}</RouterLink>
            <RouterLink to="/projects">{{ t('Projects') }}</RouterLink>
            <button @click="switchLanguage('en')">EN</button>
            <button @click="switchLanguage('nl')">NL</button>
        </nav>
    </header>
</template>