<template>
  <UPageSection
    :ui="{
      container: 'grid-cols-1! md:grid-cols-2! gap-4! p-0!',
    }"
  >
    <NuxtLink
      v-for="(project, index) in projects"
      :key="index"
      :to="project.link"
      :external="true"
      target="_blank"
      class="block"
    >
      <UCard
        class="cursor-pointer hover:ring-2 hover:ring-primary transition-all h-full"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h2 class="text-lg sm:text-xl font-bold">{{ project.name }}</h2>
            <UIcon name="i-lucide-external-link" class="size-5 text-gray-400" />
          </div>
        </template>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {{ project.description }}
        </p>
        <div class="flex gap-2 flex-wrap">
          <UBadge
            v-for="tech in project.technologies"
            :key="tech"
            variant="soft"
          >
            {{ tech }}
          </UBadge>
        </div>
      </UCard>
    </NuxtLink>
  </UPageSection>
</template>

<script setup lang="ts">
const projects = ref([
  {
    name: "Developer Profile App",
    description:
      "A Nuxt.js-powered portfolio site to showcase my background, development experience, selected projects, and contact information.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Node.js",
      "Typescript",
      "NuxtHub",
      "TailwindCSS",
      "Resend API",
    ],
    link: "/",
  },
  {
    name: "Blog App",
    description:
      "A blog application built with Nuxt.js, featuring content management, SEO optimization, and a responsive design. It allows users to delete, edit, and publish blog posts easily.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "NuxtContent",
      "NuxtStudio",
      "Nuxti18n",
      "Node.js",
      "Typescript",
      "NuxtHub",
      "TailwindCSS",
    ],
    link: "https://blog-app-mu-blond.vercel.app/",
  },
]);
</script>
