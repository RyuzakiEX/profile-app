<template>
  <div class="space-y-8 mb-20 py-10">
    <UCard
      v-for="(exp, index) in experience"
      :key="index"
      :ui="{
        body: 'space-y-4',
      }"
    >
      <div
        class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4"
      >
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ exp.company }}
          </h3>
          <p class="text-lg font-semibold text-primary mt-1">
            {{ exp.role }}
          </p>
        </div>
        <UBadge size="lg" variant="subtle" class="shrink-0">
          <UIcon name="i-lucide-calendar" class="mr-1" />
          {{ exp.duration }}
        </UBadge>
      </div>

      <USeparator />

      <ul class="space-y-3">
        <li
          v-for="(item, idx) in exp.description"
          :key="idx"
          class="flex gap-3 text-gray-700 dark:text-gray-300"
        >
          <UIcon
            name="i-lucide-check-circle"
            class="shrink-0 mt-0.5 text-primary"
          />
          <span>{{ item }}</span>
        </li>
      </ul>

      <div v-if="exp.technologies" class="flex flex-wrap gap-2 pt-2">
        <UBadge
          v-for="tech in exp.technologies"
          :key="tech"
          color="primary"
          variant="soft"
          size="sm"
        >
          {{ tech }}
        </UBadge>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const experience = [
  {
    company: "Miller Solutions Development Inc.",
    role: "Software Developer",
    duration: "Jun 2024 - Present",
    description: [
      "Collaborating with various clients to deliver high-quality web applications tailored to their needs.",
      "Developing dynamic, user-friendly front-end interfaces using Vue.js, Nuxt.js, Nuxt UI, Prime Vue and Vuetify.",
      "Implementing Test-Driven Development (TDD) practices with Hapi.js to ensure code quality and reliability.",
      "Managing version control and collaboration via Git and Trello.",
      "Building and integrating RESTful APIs for seamless data exchange between frontend and backend systems.",
      "Developed an end-to-end object detection pipeline in Python using Roboflow and Ultralytics YOLO, and built a FastAPI backend served with Uvicorn for efficient model inference and API integration.",
    ],
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Nuxt UI",
      "Prime Vue",
      "Vuetify",
      "Hapi.js",
      "Python",
      "FastAPI",
      "YOLO",
      "Git",
      "Trello",
    ],
  },
  {
    company: "Kyocera Document Solutions Development Philippines Inc.",
    role: "Software Engineer",
    duration: "Mar 2023 - May 2024",
    description: [
      "Developed and maintained C/C++ applications, enhancing system reliability and functionality.",
      "Worked on SOAP API integration to facilitate communication with external systems and services, enabling seamless data exchange.",
      "Utilized Perforce for version control and code submissions.",
      "Employed MobaXterm for remote system access, build server and troubleshooting.",
      "Actively participated in project management using JIRA and Confluence to collaborate on tasks and documents.",
      "Debugging and testing of printer functionality using Simulator, Virtual Engines and Actual Target Model.",
    ],
    technologies: [
      "C/C++",
      "SOAP API",
      "Perforce",
      "MobaXterm",
      "JIRA",
      "Confluence",
    ],
  },
];
</script>
